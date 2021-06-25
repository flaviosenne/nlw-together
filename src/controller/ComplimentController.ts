import { Request, Response } from "express";
import { ComplimentService } from "../service/ComplimentService";

class ComplimentController {
    async handle(req: Request, res: Response){
        const { userReceiver, message, tagId } = req.body
        const { userId } =req
        const complimentService = new ComplimentService()

        const compliment = await complimentService.execute({
            userReceiver, message, tagId, userSender: userId
        })

        return res.status(201).json(compliment)
    }

    async listByUserReceiverCompliments(req: Request, res: Response){
        const { userId } =req
        
        const complimentService = new ComplimentService()

        const compliment = await complimentService.listByUserReceiverCompliments(userId)

        return res.status(201).json(compliment)
    }

    async listByUserSenderCompliments(req: Request, res: Response){
        const { userId } =req
        
        const complimentService = new ComplimentService()

        const compliment = await complimentService.listByUserSenderCompliments(userId)

        return res.status(201).json(compliment)
    }
}

export { ComplimentController}