import { buildSchemaSync } from 'type-graphql'

import {
	ActiveTasksCountResolver,
	ClearCompletedResolver,
	CompleteTaskResolver,
	CreateTaskResolver,
	DeleteTaskResolver,
	FindAllTasksResolver,
	FindTaskByIdResolver
} from '../modules/task'

export const schema = buildSchemaSync({
	resolvers: [
		FindAllTasksResolver,
		FindTaskByIdResolver,
		CreateTaskResolver,
		CompleteTaskResolver,
		DeleteTaskResolver,
		ClearCompletedResolver,
		ActiveTasksCountResolver
	],
	dateScalarMode: 'isoDate',
	emitSchemaFile: true
})
