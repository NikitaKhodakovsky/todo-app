import { Entity, Column } from 'typeorm'
import { BaseEntity } from '../../../common/entities'

@Entity()
export class Task extends BaseEntity {
	@Column()
	title: string

	@Column({ default: false })
	isCompleted: boolean
}
