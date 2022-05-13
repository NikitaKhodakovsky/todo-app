import { MinLength } from 'class-validator'
import { InputType, Field } from 'type-graphql'

@InputType()
export class CreateTaskInput {
	@Field()
	@MinLength(4, { message: 'Task should be longer than 4 symbols' })
	title: string

	@Field({ nullable: true })
	isCompleted: boolean
}
