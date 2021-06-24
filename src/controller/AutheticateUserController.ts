import { Request, Response } from "express"
import { AuthenticateUserService } from "../service/AuthenticateUserService"

class AutheticateUserController {
    async handle(req: Request, res: Response){
        const { email, password} = req.body

        const authenticateUserService = new AuthenticateUserService()

        const token = await authenticateUserService.execute({email, password})

        return res.status(200).json({token})
    }
}

export { AutheticateUserController}