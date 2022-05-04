import { Request, Response } from 'express'
import { Repository } from 'typeorm'

import { Task } from '../modules/task'

export interface Context {
	req: Request
	res: Response
	taskRepository: Repository<Task>
}
