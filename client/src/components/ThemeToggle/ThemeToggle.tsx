import { useTheme } from '../../lib/theme'
import styles from './ThemeToggle.module.scss'

export function ThemeToggle() {
	const { theme, toggleTheme } = useTheme()

	return (
		<button className={styles.toggle} onClick={toggleTheme}>
			{theme === 'light' && <img src='icons/icon-moon.svg' alt='Dark mode' />}
			{theme === 'dark' && <img src='icons/icon-sun.svg' alt='Light mode' />}
		</button>
	)
}
