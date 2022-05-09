import { Arg, Ctx, ID, Mutation, Resolver } from 'type-graphql'
import { TaskNotFoundError } from '../../../common/errors'
import { Context } from '../../../types'

@Resolver()
export class DeleteTaskResolver {
	@Mutation(() => Boolean)
	async deleteTask(@Arg('id', () => ID) id: number, @Ctx() ctx: Context): Promise<boolean> {
		const task = await ctx.taskRepository.findOne({ where: { id } })

		if (!task) throw new TaskNotFoundError()

		await ctx.taskRepository.remove(task)

		return true
	}
}
