import { BadRequest } from './exceptions/BadRequest';
import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'

import './database'
import { Forbbiden } from './exceptions/Forbbiden';
import { Unauthorized } from './exceptions/Unauthorized';
import { NotFound } from './exceptions/NotFound';

const server = express()

server.use(cors())
server.use(express.json())
server.use(routes)
server.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
    console.log(err instanceof BadRequest)
    if(err instanceof BadRequest) return res.status(400).json({msg: err.message})
    if(err instanceof NotFound) return res.status(404).json({msg: err.message})
    if(err instanceof Unauthorized) return res.status(401).json({msg: err.message})
    if(err instanceof Forbbiden) return res.status(403).json({msg: err.message})
    
    return res.status(500).json({msg: 'erro interno'})
})

server.listen(3000, ()=> console.info('server running'))