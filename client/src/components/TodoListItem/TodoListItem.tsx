import { Checkbox } from '../Checkbox'
import styles from './TodoListItem.module.scss'

interface TodoListItemProps {
	id: string
}

export function TodoListItem({ id }: TodoListItemProps) {
	return (
		<div className={styles.wrap}>
			<Checkbox id={id} className={styles.checkbox} />
			<label htmlFor={id} className={styles.title}>
				Todo List Item
			</label>
			<button className={styles.closeButton} />
		</div>
	)
}
