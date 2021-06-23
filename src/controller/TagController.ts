import { Request, Response } from "express";
import { TagService } from "../service/TagService";

class TagController {
    async handle(req: Request, res: Response){
        const { name } = req.body

        const tagService = new TagService()

        const tag = await tagService.execute(name)

        return res.status(201).json(tag)
    }
}

export { TagController}