import { Resolver, Query, Ctx, Arg } from 'type-graphql'
import { SelectQueryBuilder } from 'typeorm'
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
		let builder: SelectQueryBuilder<Task> = taskRepository.createQueryBuilder('task')

		switch (status) {
			case Status.Active:
				builder = builder.where('task.isCompleted = :isCompleted', { isCompleted: false })
				break

			case Status.Completed:
				builder = builder.where('task.isCompleted = :isCompleted', { isCompleted: true })
				break
		}

		return builder.orderBy('task.createdAt', 'DESC').getMany()
	}
}
