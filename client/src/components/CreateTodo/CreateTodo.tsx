import { useState } from 'react'
import toast from 'react-hot-toast'

import styles from './CreateTodo.module.scss'

import { Checkbox } from '../Checkbox'
import { useCreateTaskMutation } from '../../graphql/mutations'

export function CreateTodo() {
	const [title, changeTitle] = useState('')
	const [isCompleted, changeIsCompleted] = useState(false)

	const [createTask] = useCreateTaskMutation({
		title,
		isCompleted
	})

	return (
		<form
			className={styles.wrap}
			onSubmit={(e) => {
				e.preventDefault()

				if (title.length < 4) return toast('Task should be longer than 4 symbols')

				createTask()

				changeTitle('')
				changeIsCompleted(false)
			}}
		>
			<Checkbox
				id='createTodo'
				className={styles.checkbox}
				checked={isCompleted}
				onChange={(e) => changeIsCompleted(e.target.checked)}
			/>
			<input
				required
				className={styles.input}
				type='text'
				placeholder='Create new todo...'
				value={title}
				onChange={(e) => changeTitle(e.target.value)}
			/>
		</form>
	)
}
