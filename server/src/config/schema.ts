import {
	CompleteTaskResolver,
	CreateTaskResolver,
	DeleteTaskResolver,
	FindTaskResolver
} from '../modules/task/resolvers'
import { buildSchemaSync } from 'type-graphql'

export const schema = buildSchemaSync({
	resolvers: [FindTaskResolver, CreateTaskResolver, CompleteTaskResolver, DeleteTaskResolver],
	dateScalarMode: 'isoDate',
	emitSchemaFile: true
})
