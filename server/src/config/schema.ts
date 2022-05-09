import { buildSchemaSync } from 'type-graphql'

import {
	ActiveTasksCountResolver,
	ClearCompletedResolver,
	ToggleTaskStatusResolver,
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
		ToggleTaskStatusResolver,
		DeleteTaskResolver,
		ClearCompletedResolver,
		ActiveTasksCountResolver
	],
	dateScalarMode: 'isoDate',
	emitSchemaFile: true
})
