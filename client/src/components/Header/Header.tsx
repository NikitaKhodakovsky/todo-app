import styles from './Header.module.scss'

export function Header() {
	return (
		<div className={styles.wrap}>
			<h1 className={styles.title}>TODO</h1>
			<button className={styles.toggle}>
				<img src='icons/icon-moon.svg' alt='Dark mode' />
			</button>
		</div>
	)
}
