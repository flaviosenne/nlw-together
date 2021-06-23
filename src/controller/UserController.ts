import { Request, Response } from "express";
import { UserService } from "../service/UserService";

class UserController {
    async handle(req: Request, res: Response){
        const { email, name, admin, password} = req.body

        const userService = new UserService()

        const user = await userService.execute({name, email, admin, password})

        return res.status(201).json(user)
    }
}

export { UserController}