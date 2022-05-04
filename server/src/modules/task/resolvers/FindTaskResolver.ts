import { Resolver, Query, Ctx, Arg, Int } from 'type-graphql'
import { TaskNotFoundError } from '../../../common/errors'
import { Context } from '../../../types'
import { Task } from '../entities'

@Resolver()
export class FindTaskResolver {
	@Query(() => [Task])
	async tasks(@Ctx() ctx: Context): Promise<Task[]> {
		return ctx.taskRepository.find()
	}

	@Query(() => Task)
	async task(@Arg('id', () => Int) id: number, @Ctx() ctx: Context): Promise<Task> {
		const task = await ctx.taskRepository.findOne({ where: { id } })

		if (!task) throw new TaskNotFoundError()

		return task
	}
}
