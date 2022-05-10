import { gql, useMutation } from '@apollo/client'
import { GetTasksQuery } from '../queries'

export const ToggleTaskStatusMutation = gql`
	mutation ToggleTaskStatusMutation($taskId: ID!) {
		toggleTaskStatus(id: $taskId) {
			id
			createdAt
			updatedAt
			title
			isCompleted
		}
	}
`

export type ToggleTaskStatusMutationResult = Pick<Mutation, 'toggleTaskStatus'>

export function useToggleTaskStatusMutation(taskId: string) {
	return useMutation<ToggleTaskStatusMutationResult>(ToggleTaskStatusMutation, {
		variables: {
			taskId
		},
		refetchQueries: [GetTasksQuery]
	})
}
