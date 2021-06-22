import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import { routes } from './routes'

import './database'

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3000, ()=> console.info('server running'))