import { Mutation, Ctx, Arg, Resolver } from 'type-graphql'

import { CreateTaskInput } from '../input-type'
import { Context } from '../../../types'
import { Task } from '../entities'

@Resolver()
export class CreateTaskResolver {
	@Mutation(() => Task)
	async createTask(@Arg('data') { title, isCompleted }: CreateTaskInput, @Ctx() ctx: Context): Promise<Task> {
		const task = ctx.taskRepository.create({ title, isCompleted })
		return ctx.taskRepository.save(task)
	}
}
