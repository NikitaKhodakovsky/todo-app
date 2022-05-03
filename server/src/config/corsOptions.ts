import { CorsOptions } from 'cors'

export const corsOptions: CorsOptions = {
	origin: process.env.ORIGIN,
	credentials: true
}
