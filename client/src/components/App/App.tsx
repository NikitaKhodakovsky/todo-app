import { useState } from 'react'
import { StatusFilter } from '../StatusFilter'
import { CreateTodo } from './../CreateTodo'
import { Header } from './../Header'
import { TodoList } from './../TodoList'

import styles from './App.module.scss'

export function App() {
	const [status, setStatus] = useState<Status>('All')

	return (
		<div className='container'>
			<Header />
			<CreateTodo />
			<TodoList status={status} />
			<StatusFilter status={status} setStatus={setStatus} />
			<div className={styles.info}>Drag and drop to reorder list</div>
		</div>
	)
}
