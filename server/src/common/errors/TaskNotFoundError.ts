import { ApolloError } from 'apollo-server-express'

export class TaskNotFoundError extends ApolloError {
	constructor(message?: string) {
		super(message || 'Task not found', 'NOT_FOUND')
	}
}
