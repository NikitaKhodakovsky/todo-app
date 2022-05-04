import { registerEnumType } from 'type-graphql'

export enum Status {
	All,
	Active,
	Completed
}

registerEnumType(Status, {
	name: 'Status'
})
