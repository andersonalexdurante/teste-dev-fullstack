import 'reflect-metadata'
import * as express from 'express'
import * as cors from 'cors'
import * as morgan from 'morgan'

import router from './routes'
import {connectToDatabase} from './config/db'

/**
 * Create and configure the application
 */

export const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(router)

connectToDatabase()