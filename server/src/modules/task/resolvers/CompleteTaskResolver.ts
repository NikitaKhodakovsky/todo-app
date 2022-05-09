import { Arg, Ctx, ID, Mutation, Resolver } from 'type-graphql'
import { TaskNotFoundError } from '../../../common/errors'
import { Context } from '../../../types'
import { Task } from '../entities'

@Resolver()
export class CompleteTaskResolver {
	@Mutation(() => Task)
	async completeTask(@Arg('id', () => ID) id: number, @Ctx() ctx: Context): Promise<Task> {
		await ctx.taskRepository.update(id, { isCompleted: true })

		const task = await ctx.taskRepository.findOne({ where: { id } })

		if (!task) throw new TaskNotFoundError()

		return task
	}
}
