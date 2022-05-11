import { useTheme } from '../../lib/theme'
import styles from './ThemeToggle.module.scss'

export function ThemeToggle() {
	const { toggleTheme } = useTheme()

	return (
		<button className={styles.toggle} onClick={toggleTheme}>
			<img src='icons/icon-moon.svg' alt='Dark mode' />
		</button>
	)
}
