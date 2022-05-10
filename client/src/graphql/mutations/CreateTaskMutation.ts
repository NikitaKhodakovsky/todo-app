import { gql, useMutation } from '@apollo/client'
import { GetTasksQuery } from '../queries'

export const CreateTaskMutation = gql`
	mutation CreateTaskMutation($data: CreateTaskInput!) {
		createTask(data: $data) {
			id
			title
			isCompleted
		}
	}
`

export type CreateTaskMutationResult = Pick<Mutation, 'createTask'>

export function useCreateTaskMutation(data: CreateTaskInput) {
	return useMutation<CreateTaskMutationResult>(CreateTaskMutation, {
		variables: {
			data
		},
		refetchQueries: [GetTasksQuery]
	})
}
