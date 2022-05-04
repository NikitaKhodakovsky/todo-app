import { FindTaskResolver } from '../modules/task/resolvers'
import { buildSchemaSync } from 'type-graphql'

export const schema = buildSchemaSync({
	resolvers: [FindTaskResolver],
	dateScalarMode: 'isoDate'
})
