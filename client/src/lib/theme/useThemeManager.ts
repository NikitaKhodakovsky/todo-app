import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import { ThemeManager } from './ThemeManager'

export function useThemeManager(): ThemeManager {
	return useContext(ThemeContext)
}
