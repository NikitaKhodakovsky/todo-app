import { Resolver, Query, Ctx, Arg } from 'type-graphql'
import { Context } from '../../../types'
import { Task } from '../entities'
import { Status } from '../enums'

@Resolver()
export class FindAllTasksResolver {
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
}
