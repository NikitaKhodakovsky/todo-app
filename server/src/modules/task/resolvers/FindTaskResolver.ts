import { Resolver, Query, Ctx, Arg, Int } from 'type-graphql'
import { TaskNotFoundError } from '../../../common/errors'
import { Context } from '../../../types'
import { Task } from '../entities'
import { Status } from '../enums'

@Resolver()
export class FindTaskResolver {
	@Query(() => [Task])
	async tasks(
		@Arg('status', () => Status, { defaultValue: Status.All }) status: Status,
		@Ctx() { taskRepository }: Context
	): Promise<Task[]> {
		switch (status) {
			case Status.Active:
				return taskRepository.find({ where: { isCompleted: false } })

			case Status.Completed:
				return taskRepository.find({ where: { isCompleted: true } })

			default:
				return taskRepository.find()
		}
	}

	@Query(() => Task)
	async task(@Arg('id', () => Int) id: number, @Ctx() ctx: Context): Promise<Task> {
		const task = await ctx.taskRepository.findOne({ where: { id } })

		if (!task) throw new TaskNotFoundError()

		return task
	}
}
