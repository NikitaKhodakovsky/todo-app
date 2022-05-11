import { ReactNode, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'
import { ThemeManager } from './ThemeManager'

interface ThemeProviderProps {
	manager: ThemeManager
	children: ReactNode
}

export function ThemeProvider({ manager, children }: ThemeProviderProps) {
	useEffect(() => {
		return manager.listen()
	}, [manager])

	return <ThemeContext.Provider value={manager}>{children}</ThemeContext.Provider>
}
