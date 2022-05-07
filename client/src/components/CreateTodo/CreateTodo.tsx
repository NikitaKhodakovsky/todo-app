// import styles from './CreateTodo.module.scss'

// import { Checkbox } from '../Checkbox'

// export function CreateTodo() {
// 	return (
// 		<div className={styles.wrap}>
// 			<Checkbox id='createTodo' className={styles.checkbox} />
// 			<label htmlFor='createTodo'>Create a new todo...</label>
// 		</div>
// 	)
// }

import styles from './CreateTodo.module.scss'

import { Checkbox } from '../Checkbox'

export function CreateTodo() {
	return (
		<div className={styles.wrap}>
			<Checkbox id='createTodo' className={styles.checkbox} />
			<input required className={styles.input} type='text' placeholder='Create new todo...' />
		</div>
	)
}
