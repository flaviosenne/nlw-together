import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import cors from 'cors'

import './database'
import { routes } from './routes'
import { BadRequest } from './exceptions/BadRequest';
import { Forbbiden } from './exceptions/Forbbiden';
import { Unauthorized } from './exceptions/Unauthorized';
import { NotFound } from './exceptions/NotFound';

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)
server.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    if(err instanceof BadRequest) return res.status(400).json({msg: err.message})
    if(err instanceof NotFound) return res.status(404).json({msg: err.message})
    if(err instanceof Unauthorized) return res.status(401).json({msg: err.message})
    if(err instanceof Forbbiden) return res.status(403).json({msg: err.message})
    
    return res.status(500).json({err: err.message})
})

server.listen(3000, ()=> console.info('server running'))