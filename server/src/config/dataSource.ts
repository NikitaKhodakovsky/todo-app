import path from 'path'

import { DataSource } from 'typeorm'
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions'
import { Task } from '../modules/task/entities'

const dataSourceOptions: SqliteConnectionOptions = {
	type: 'sqlite',
	database: path.join(process.cwd(), 'db.sqlite'),
	entities: [Task],
	synchronize: process.env.NODE_ENV !== 'production'
}

export const dataSource = new DataSource(dataSourceOptions)
