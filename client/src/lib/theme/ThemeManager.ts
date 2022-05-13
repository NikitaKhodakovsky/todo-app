/* ----- userTheme > superiorTheme > prefferedThemeMedia > defaultTheme ----- */

import { Subscriber, Theme, ThemeManagerOptions, UnsubscribeFunction } from './types'

export class ThemeManager {
	private subscribers: Subscriber[] = []

	//Theme explicitly setted by user (previous from local storage or setTheme)
	private userTheme?: Theme

	//superiorTheme > prefferedThemeMedia > defaultTheme
	private computedTheme: Theme

	private localStorageKey: string = 'theme'
	private keepLocalStorage: boolean = true

	private htmlElement?: HTMLElement
	private lightClass: string = 'light'
	private darkClass: string = 'dark'

	private darkMedia = window.matchMedia('(prefers-color-scheme: dark)')
	private lightMedia = window.matchMedia('(prefers-color-scheme: light)')
	private disablePrefersColorScheme: boolean = false

	constructor({
		superiorTheme,
		defaultTheme,
		keepLocalStorage,
		onChange,
		localStorageKey,
		htmlElement,
		disablePrefersColorScheme,
		customDarkClass,
		customLightClass
	}: ThemeManagerOptions = {}) {
		/* --------------------------- Basic configuration -------------------------- */

		if (disablePrefersColorScheme === true) this.disablePrefersColorScheme = true
		if (keepLocalStorage === false) this.keepLocalStorage = false
		if (localStorageKey) this.localStorageKey = localStorageKey
		if (customLightClass) this.lightClass = customLightClass
		if (customDarkClass) this.darkClass = customDarkClass
		if (htmlElement) this.htmlElement = htmlElement
		if (onChange) this.subscribe(onChange)

		/* ------------------------ Define the computedTheme ------------------------ */

		let prefferedTheme: Theme | undefined

		if (!this.disablePrefersColorScheme) {
			if (this.darkMedia.matches) prefferedTheme = 'dark'
			if (this.lightMedia.matches) prefferedTheme = 'light'
		}

		this.computedTheme = superiorTheme || prefferedTheme || defaultTheme || 'light'

		/* ---------------------------- Define userTheme ---------------------------- */

		if (this.keepLocalStorage) {
			const value = localStorage.getItem(this.localStorageKey)

			if (value === 'dark' || value === 'light') {
				this.userTheme = value
			} else {
				console.error('Invalid theme value')
			}
		}

		this.afterChange()
	}

	private afterChange() {
		this.subscribers.forEach((subscriber) => subscriber(this.getTheme()))

		if (this.htmlElement) {
			this.htmlElement.classList.remove(this.darkClass, this.lightClass)
			this.htmlElement.classList.add(this.getTheme() === 'dark' ? this.darkClass : this.lightClass)
		}
	}

	public getTheme() {
		return this.userTheme || this.computedTheme
	}

	private setComputedTheme(theme: Theme) {
		this.computedTheme = theme
		this.afterChange()
	}

	public setTheme(theme: Theme) {
		this.userTheme = theme

		if (this.keepLocalStorage) {
			localStorage.setItem(this.localStorageKey, theme)
		}

		this.afterChange()
	}

	public subscribe(subscriber: Subscriber): UnsubscribeFunction {
		this.subscribers.push(subscriber)
		return () => (this.subscribers = this.subscribers.filter((s) => s !== subscriber))
	}

	public listen(): UnsubscribeFunction {
		if (this.disablePrefersColorScheme) return () => {}

		const darkListener = (e: MediaQueryListEvent) => e.matches && this.setComputedTheme('dark')
		const lightListener = (e: MediaQueryListEvent) => e.matches && this.setComputedTheme('light')

		this.darkMedia.addEventListener('change', darkListener)
		this.lightMedia.addEventListener('change', lightListener)

		return () => {
			this.darkMedia.removeEventListener('change', darkListener)
			this.lightMedia.removeEventListener('change', lightListener)
		}
	}
}
