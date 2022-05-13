import 'reflect-metadata'
import 'dotenv/config'

import cors from 'cors'
import express from 'express'
import { ApolloServer } from 'apollo-server-express'

import { schema, context, corsOptions, dataSource } from './config'
import { red } from 'ansi-colors'

async function main() {
	await dataSource
		.initialize()
		.then(() => console.log('Data Source has been initialized!'))
		.catch((err) => console.error(red('Error during Data Source initialization'), err))

	const app = express()

	app.set('trust proxy', process.env.NODE_ENV !== 'production')

	app.use(cors(corsOptions))

	const apolloServer = new ApolloServer({
		schema,
		context,
		introspection: process.env.NODE_ENV !== 'production'
	})

	await apolloServer.start()

	const PORT = process.env.PORT || 4200

	apolloServer.applyMiddleware({ app, cors: corsOptions })

	app.listen(PORT, () => console.log(`Server started on port: http://localhost:${PORT}`))
}

main()
