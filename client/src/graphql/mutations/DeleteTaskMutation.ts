import { gql, useMutation } from '@apollo/client'
import { GetTasksQuery } from '../queries'

export const DeleteTaskMutation = gql`
	mutation DeleteTaskMutation($taskId: ID!) {
		deleteTask(id: $taskId)
	}
`
export type DeleteTaskMutationResult = Pick<Mutation, 'deleteTask'>

export function useDeleteTaskMutation(taskId: string) {
	return useMutation<DeleteTaskMutationResult>(DeleteTaskMutation, {
		variables: {
			taskId
		},
		refetchQueries: [GetTasksQuery]
	})
}
