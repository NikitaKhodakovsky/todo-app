import { Dispatch } from 'react'
import { SetStateAction } from 'react'
import styles from './StatusFilter.module.scss'

interface ItemProps {
	status: Status
	activeStatus: Status
	setStatus: Dispatch<SetStateAction<Status>>
}

function Item({ status, setStatus, activeStatus }: ItemProps) {
	return (
		<div
			className={`${styles.button} ${status === activeStatus ? styles.active : ''}`}
			onClick={() => setStatus(status)}
		>
			{status}
		</div>
	)
}

interface StatusFilterProps {
	status: Status
	setStatus: Dispatch<SetStateAction<Status>>
}

export function StatusFilter({ status, setStatus }: StatusFilterProps) {
	return (
		<div className={styles.wrap}>
			<Item status='All' activeStatus={status} setStatus={setStatus} />
			<Item status='Active' activeStatus={status} setStatus={setStatus} />
			<Item status='Completed' activeStatus={status} setStatus={setStatus} />
		</div>
	)
}
