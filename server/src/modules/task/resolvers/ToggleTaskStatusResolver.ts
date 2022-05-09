import { Arg, Ctx, ID, Mutation, Resolver } from 'type-graphql'
import { TaskNotFoundError } from '../../../common/errors'
import { Context } from '../../../types'
import { Task } from '../entities'

@Resolver()
export class ToggleTaskStatusResolver {
	@Mutation(() => Task)
	async toggleTaskStatus(@Arg('id', () => ID) id: number, @Ctx() ctx: Context): Promise<Task> {
		const task = await ctx.taskRepository.findOne({ where: { id } })

		if (!task) throw new TaskNotFoundError()

		task.isCompleted = !task.isCompleted

		return ctx.taskRepository.save(task)
	}
}
