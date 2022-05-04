import { Entity, Column } from 'typeorm'
import { ObjectType, Field } from 'type-graphql'
import { BaseEntity } from '../../../common/entities'

@Entity()
@ObjectType()
export class Task extends BaseEntity {
	@Field()
	@Column()
	title: string

	@Field()
	@Column({ default: false })
	isCompleted: boolean
}
