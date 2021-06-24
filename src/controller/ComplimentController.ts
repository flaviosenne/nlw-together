import { Request, Response } from "express";
import { ComplimentService } from "../service/ComplimentService";

class ComplimentController {
    async handle(req: Request, res: Response){
        const { userReceiver, userSender, message, tagId } = req.body

        const complimentService = new ComplimentService()

        const compliment = await complimentService.execute({
            userReceiver, message, tagId, userSender
        })

        return res.status(201).json(compliment)
    }
}

export { ComplimentController}