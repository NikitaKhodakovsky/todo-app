import { Ctx, Mutation, Resolver } from 'type-graphql'
import { Context } from '../../../types'
import { Task } from '../entities'

@Resolver()
export class ClearCompletedResolver {
	@Mutation(() => [Task])
	async clearCompleted(@Ctx() ctx: Context): Promise<Task[]> {
		await ctx.taskRepository.delete({ isCompleted: true })
		return ctx.taskRepository.find()
	}
}
