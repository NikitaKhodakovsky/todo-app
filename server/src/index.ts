import 'reflect-metadata'
import 'dotenv/config'

import { ApolloServer } from 'apollo-server-express'
import { red } from 'ansi-colors'
import express from 'express'
import cors from 'cors'

import { schema, context, corsOptions, dataSource } from './config'
import { isProduction } from './constants'
import { PORT } from './constants/config'

async function main() {
	await dataSource
		.initialize()
		.then(() => console.log('Data Source has been initialized!'))
		.catch((err) => {
			console.error(red('Error during Data Source initialization'), err)
			process.exit(1)
		})

	const app = express()

	app.set('trust proxy', true)

	app.use(cors(corsOptions))

	const apolloServer = new ApolloServer({
		schema,
		context,
		introspection: !isProduction
	})

	await apolloServer.start()

	apolloServer.applyMiddleware({ app, cors: corsOptions })

	app.listen(PORT, () => console.log(`Server started on port: http://localhost:${PORT}`))
}

main()
