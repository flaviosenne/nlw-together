import { NextFunction, Request, Response } from "express";
import { Forbbiden } from "../exceptions/Forbbiden";
import { verify }from 'jsonwebtoken'

interface payload {
    sub: string
}
export function ensureAuthenticated(req: Request, res: Response, next: NextFunction){
    
    if(!req.headers.authorization) throw new Forbbiden('usuário não autenticado')
    
    const [, token] = req.headers.authorization.split(' ')

    if(!token) throw new Forbbiden('usuário não autenticado')

    try{
        const {sub} = verify(token, '340kdegfk0gqkk0gw--3mf') as payload
        
        req.userId = sub

        next()
    }catch(e){
        throw new Forbbiden('usuário não autenticado')
    }
    
}