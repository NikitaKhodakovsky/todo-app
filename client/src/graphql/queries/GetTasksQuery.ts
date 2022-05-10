import { gql, useQuery } from '@apollo/client'

export const GetTasksQuery = gql`
	query GetTasksQuery($status: Status) {
		tasks(status: $status) {
			id
			createdAt
			updatedAt
			title
			isCompleted
		}
		activeTasksCount
	}
`

export type GetTasksQueryResult = Pick<Query, 'tasks' | 'activeTasksCount'>

export function useGetTasksQuery(status: Status = 'All') {
	return useQuery<GetTasksQueryResult>(GetTasksQuery, {
		variables: {
			status
		},
		fetchPolicy: 'no-cache'
	})
}
