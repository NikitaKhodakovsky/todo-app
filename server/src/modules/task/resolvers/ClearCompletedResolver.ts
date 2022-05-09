import { Ctx, Mutation, Resolver } from 'type-graphql'
import { Context } from '../../../types'

@Resolver()
export class ClearCompletedResolver {
	@Mutation(() => Boolean)
	async clearCompleted(@Ctx() ctx: Context): Promise<boolean> {
		await ctx.taskRepository.delete({ isCompleted: true })
		return true
	}
}
