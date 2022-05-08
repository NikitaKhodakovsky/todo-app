import { Ctx, Int, Query, Resolver } from 'type-graphql'
import { Context } from '../../../types'

@Resolver()
export class ActiveTasksCountResolver {
	@Query(() => Int)
	async activeTasksCount(@Ctx() ctx: Context): Promise<number> {
		return ctx.taskRepository.countBy({ isCompleted: false })
	}
}
