import { CreateTaskResolver, FindTaskResolver } from '../modules/task/resolvers'
import { buildSchemaSync } from 'type-graphql'

export const schema = buildSchemaSync({
	resolvers: [FindTaskResolver, CreateTaskResolver],
	dateScalarMode: 'isoDate',
	emitSchemaFile: true
})
