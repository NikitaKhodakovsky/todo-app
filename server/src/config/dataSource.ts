//For TypeORM CLI
import 'dotenv/config'

import { DataSource, DataSourceOptions } from 'typeorm'
import { Task } from '../modules/task/entities'

const dataSourceOptions = {
	type: 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE || 'postgres',
	entities: [Task]
} as DataSourceOptions

export const dataSource = new DataSource(dataSourceOptions)
