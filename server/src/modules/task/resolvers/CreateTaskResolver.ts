import { Mutation, Ctx, Arg, Resolver } from 'type-graphql'

import { CreateTaskInput } from '../input-type'
import { Context } from '../../../types'
import { Task } from '../entities'

@Resolver()
export class CreateTaskResolver {
	@Mutation(() => Task)
	async createTask(@Arg('data') { title }: CreateTaskInput, @Ctx() ctx: Context): Promise<Task> {
		const task = ctx.taskRepository.create({ title })
		return ctx.taskRepository.save(task)
	}
}
