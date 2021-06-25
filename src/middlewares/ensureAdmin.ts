import { NextFunction, Request, Response } from "express";
import { Forbbiden } from "../exceptions/Forbbiden";
import { UserService } from "../service/UserService";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    const {userId} = req

    const {admin} = await new UserService().findById(userId)

    if(!admin) throw new Forbbiden('não tem permissão')

    next()
}