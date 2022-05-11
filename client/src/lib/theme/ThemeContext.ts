import { createContext } from 'react'
import { ThemeManager } from './ThemeManager'

export const ThemeContext = createContext(new ThemeManager())
