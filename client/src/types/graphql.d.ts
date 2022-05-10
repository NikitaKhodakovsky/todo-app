type Status = 'All' | 'Active' | 'Completed'

interface CreateTaskInput {
	isCompleted?: boolean
	title: string
}

interface Mutation {
	clearCompleted: boolean
	toggleTaskStatus: Task
	createTask: Task
	deleteTask: Boolean
}

interface Query {
	activeTasksCount: number
	task: Task
	tasks: Task[]
}

interface Task {
	id: string
	createdAt: Date
	updatedAt: Date
	isCompleted: boolean
	title: string
}
