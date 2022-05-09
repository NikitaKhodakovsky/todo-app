import { Resolver, Query, Ctx, Arg, ID } from 'type-graphql'
import { TaskNotFoundError } from '../../../common/errors'
import { Context } from '../../../types'
import { Task } from '../entities'

@Resolver()
export class FindTaskByIdResolver {
	@Query(() => Task)
	async task(@Arg('id', () => ID) id: number, @Ctx() ctx: Context): Promise<Task> {
		const task = await ctx.taskRepository.findOne({ where: { id } })

		if (!task) throw new TaskNotFoundError()

		return task
	}
}
