import styles from './TodoList.module.scss'
import { TodoListItem } from '../TodoListItem'
import { TodoListStatusFilter } from '../TodoListStatusFilter'

export function TodoList() {
	return (
		<div className={styles.wrap}>
			<div className={styles.listWrap}>
				<TodoListItem id={'1'} />
				<TodoListItem id={'2'} />
				<TodoListItem id={'3'} />
				<TodoListItem id={'4'} />
				<div className={styles.bar}>
					<div>5 items left</div>
					<button>Clear Completed</button>
				</div>
			</div>
			<TodoListStatusFilter />
			<div className={styles.info}>Drag and drop to reorder list</div>
		</div>
	)
}
