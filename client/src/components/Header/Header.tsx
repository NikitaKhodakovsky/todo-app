import { ThemeToggle } from '../ThemeToggle'
import styles from './Header.module.scss'

export function Header() {
	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>TODO</h1>
			<ThemeToggle />
		</div>
	)
}
