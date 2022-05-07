import { Dispatch } from 'react'
import { SetStateAction, useState } from 'react'
import styles from './TodoListStatusFilter.module.scss'

type Status = 'All' | 'Active' | 'Completed'

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

export function TodoListStatusFilter() {
	const [activeStatus, setStatus] = useState<Status>('All')

	return (
		<div className={styles.wrap}>
			<Item status='All' activeStatus={activeStatus} setStatus={setStatus} />
			<Item status='Active' activeStatus={activeStatus} setStatus={setStatus} />
			<Item status='Completed' activeStatus={activeStatus} setStatus={setStatus} />
		</div>
	)
}
