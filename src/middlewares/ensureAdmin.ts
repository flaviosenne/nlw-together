import { NextFunction, Request, Response } from "express";
import { Forbbiden } from "../exceptions/Forbbiden";

export function ensureAdmin(req: Request, res: Response, next: NextFunction){
    const admin = true

    if(!admin) throw new Forbbiden('não autenticado')

    next()
}