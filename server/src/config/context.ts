import { ContextFunction } from 'apollo-server-core'
import { dataSource } from './dataSource'
import { Task } from '../modules/task'

export const context: ContextFunction = ({ req, res }) => {
	const taskRepository = dataSource.getRepository(Task)
	return {
		taskRepository,
		req,
		res
	}
}
