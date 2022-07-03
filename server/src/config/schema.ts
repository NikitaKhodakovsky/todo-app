import { buildSchemaSync } from 'type-graphql'

import { TaskResolvers } from '../modules/task'
import { isProduction } from '../constants'

export const schema = buildSchemaSync({
	resolvers: [...TaskResolvers],
	dateScalarMode: 'isoDate',
	emitSchemaFile: !isProduction
})
