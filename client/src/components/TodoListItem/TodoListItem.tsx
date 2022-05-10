import { useToggleTaskStatusMutation, useDeleteTaskMutation } from '../../graphql/mutations'
import { Checkbox } from '../Checkbox'
import styles from './TodoListItem.module.scss'

interface TodoListItemProps {
	task: Task
}

export function TodoListItem({ task }: TodoListItemProps) {
	const [toggleStatus] = useToggleTaskStatusMutation(task.id)
	const [deleteTask] = useDeleteTaskMutation(task.id)

	const { title, isCompleted, id } = task

	return (
		<li className={styles.wrap}>
			<Checkbox id={id} className={styles.checkbox} checked={isCompleted} onChange={() => toggleStatus()} />
			<label htmlFor={id} className={styles.title}>
				{title}
			</label>
			<button className={styles.closeButton} onClick={() => deleteTask()} />
		</li>
	)
}
