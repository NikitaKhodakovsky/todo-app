import { BuildSchemaOptions } from 'type-graphql'
import { ActiveTasksCountResolver } from './ActiveTasksCountResolver'
import { ClearCompletedResolver } from './ClearCompletedResolver'
import { CreateTaskResolver } from './CreateTaskResolver'
import { DeleteTaskResolver } from './DeleteTaskResolver'
import { FindAllTasksResolver } from './FindAllTasksResolver'
import { FindTaskByIdResolver } from './FindTaskByIdResolver'
import { ToggleTaskStatusResolver } from './ToggleTaskStatusResolver'

export const TaskResolvers: BuildSchemaOptions['resolvers'] = [
	FindAllTasksResolver,
	FindTaskByIdResolver,
	CreateTaskResolver,
	ToggleTaskStatusResolver,
	DeleteTaskResolver,
	ClearCompletedResolver,
	ActiveTasksCountResolver
]
