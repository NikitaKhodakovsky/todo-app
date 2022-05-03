import { ContextFunction } from 'apollo-server-core'

export const context: ContextFunction = ({ req, res }) => {
	return {
		req,
		res
	}
}
