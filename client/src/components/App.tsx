import { CreateTodo } from './CreateTodo'
import { Header } from './Header'
import { TodoList } from './TodoList'

export function App() {
	return (
		<div className='container'>
			<Header />
			<CreateTodo />
			<TodoList />
		</div>
	)
}
