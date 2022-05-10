import { gql, useMutation } from '@apollo/client'
import { GetTasksQuery } from '../queries'

export const ClearCompletedMutation = gql`
	mutation {
		clearCompleted
	}
`
export type ClearCompletedMutationResult = Pick<Mutation, 'clearCompleted'>

export function useClearCompletedMutation() {
	return useMutation<ClearCompletedMutationResult>(ClearCompletedMutation, {
		refetchQueries: [GetTasksQuery]
	})
}
