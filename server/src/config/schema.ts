import { CompleteTaskResolver, CreateTaskResolver, FindTaskResolver } from '../modules/task/resolvers'
import { buildSchemaSync } from 'type-graphql'

export const schema = buildSchemaSync({
	resolvers: [FindTaskResolver, CreateTaskResolver, CompleteTaskResolver],
	dateScalarMode: 'isoDate',
	emitSchemaFile: true
})
