import { DataSource, DataSourceOptions } from 'typeorm'

const dataSourceOptions = {
	type: 'postgres',
	host: process.env.DB_HOST || 'localhost',
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE || 'postgres'
} as DataSourceOptions

export const dataSource = new DataSource(dataSourceOptions)
