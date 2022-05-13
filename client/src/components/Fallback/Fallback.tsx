import { Fragment } from 'react'
import { FallbackProps } from 'react-error-boundary'

import { Header } from '../Header'
import styles from './Fallback.module.scss'

export function Fallback({ resetErrorBoundary }: FallbackProps) {
	return (
		<Fragment>
			<Header />
			<div className={styles.wrap}>
				<h3>Something goes wrong</h3>
				<button className={styles.button} onClick={resetErrorBoundary}>
					Restart
				</button>
			</div>
		</Fragment>
	)
}
