import { buildSchemaSync } from 'type-graphql'

import {
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
		ClearCompletedResolver
	],
	dateScalarMode: 'isoDate',
	emitSchemaFile: true
})
