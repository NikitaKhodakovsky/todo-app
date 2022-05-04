import { buildSchemaSync } from 'type-graphql'

import {
	ClearCompletedResolver,
	CompleteTaskResolver,
	CreateTaskResolver,
	DeleteTaskResolver,
	FindTaskResolver
} from '../modules/task/resolvers'

export const schema = buildSchemaSync({
	resolvers: [FindTaskResolver, CreateTaskResolver, CompleteTaskResolver, DeleteTaskResolver, ClearCompletedResolver],
	dateScalarMode: 'isoDate',
	emitSchemaFile: true
})
