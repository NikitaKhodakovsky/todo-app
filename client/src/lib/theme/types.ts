export type Theme = 'light' | 'dark'
export type Subscriber = (v: Theme) => any
export type UnsubscribeFunction = () => void

export interface ThemeManagerOptions {
	superiorTheme?: Theme // undefined
	defaultTheme?: Theme // 'light'
	keepLocalStorage?: boolean // 'true'
	localStorageKey?: string
	htmlElement?: HTMLElement
	onChange?: Subscriber
	disablePrefersColorScheme?: boolean
}

export interface UseThemeResult {
	theme: Theme
	setTheme: (theme: Theme) => void
	toggleTheme: (...args: any[]) => void
}
