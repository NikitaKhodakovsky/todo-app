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

export interface GetTasksQueryVariables {
	status: Status
}

export type GetTasksQueryResult = Pick<Query, 'tasks' | 'activeTasksCount'>

export function useGetTasksQuery(status: Status = 'All') {
	return useQuery<GetTasksQueryResult, GetTasksQueryVariables>(GetTasksQuery, {
		variables: {
			status
		},
		pollInterval: 10000,
		fetchPolicy: 'no-cache'
	})
}
