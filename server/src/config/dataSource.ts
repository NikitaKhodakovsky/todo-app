import { DataSource } from 'typeorm'

import { Task } from '../modules/task/entities'

export const dataSource = new DataSource({
	type: 'sqlite',
	database: '/data/db.sqlite',
	entities: [Task],
	synchronize: true
})
