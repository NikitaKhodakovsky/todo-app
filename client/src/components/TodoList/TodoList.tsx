import styles from './TodoList.module.scss'

import { TodoListItem } from '../TodoListItem'
import { useGetTasksQuery } from '../../graphql/queries'
import { useClearCompletedMutation } from '../../graphql/mutations'

interface TodoListProps {
	status: Status
}

export function TodoList({ status }: TodoListProps) {
	const { data, loading, error } = useGetTasksQuery(status)
	const [clearCompleted] = useClearCompletedMutation()

	if (loading) return <div className={styles.wrap}>Loading...</div>
	if (!data || error) return <div className={styles.wrap}>Error!</div>
	if (data.tasks.length < 1) return <div className={styles.wrap}>Tasks not found</div>

	const { tasks, activeTasksCount } = data

	return (
		<div className={styles.wrap}>
			<ul>
				{tasks.map((task) => (
					<TodoListItem task={task} key={task.id} />
				))}
			</ul>
			<div className={styles.bar}>
				<div>{activeTasksCount} items left</div>
				<button onClick={() => clearCompleted()}>Clear Completed</button>
			</div>
		</div>
	)
}
