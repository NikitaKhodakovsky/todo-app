import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { ErrorBoundary } from 'react-error-boundary'

import { StatusFilter } from './StatusFilter'
import { CreateTodo } from './CreateTodo'
import { Header } from './Header'
import { TodoList } from './TodoList'
import { Fallback } from './Fallback'

export function App() {
	const [status, setStatus] = useState<Status>('All')

	return (
		<div className='container'>
			<ErrorBoundary FallbackComponent={Fallback} onReset={() => window.location.reload()}>
				<Toaster />
				<Header />
				<CreateTodo />
				<TodoList status={status} />
				<StatusFilter status={status} setStatus={setStatus} />
			</ErrorBoundary>
		</div>
	)
}
