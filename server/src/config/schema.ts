import { buildSchemaSync } from 'type-graphql'

import { TaskResolvers } from '../modules/task'

export const schema = buildSchemaSync({
	resolvers: [...TaskResolvers],
	dateScalarMode: 'isoDate',
	emitSchemaFile: true
})
