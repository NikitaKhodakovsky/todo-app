import { Resolver, Query, Ctx } from 'type-graphql'
import { Context } from '../../../types'
import { Task } from '../entities'

@Resolver()
export class FindTaskResolver {
	@Query(() => [Task])
	async tasks(@Ctx() ctx: Context): Promise<Task[]> {
		return ctx.taskRepository.find()
	}
}
