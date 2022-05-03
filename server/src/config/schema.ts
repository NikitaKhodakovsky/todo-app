import { buildSchemaSync } from 'type-graphql'
import { Query, Resolver } from 'type-graphql'

@Resolver()
class HelloWorldResolver {
	@Query()
	helloWorld(): string {
		return 'Helo world'
	}
}

export const schema = buildSchemaSync({
	resolvers: [HelloWorldResolver]
})
