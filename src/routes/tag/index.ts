import { Router } from "express";
import { TagController } from "../../controller/TagController";
import { ensureAdmin } from "../../middlewares/ensureAdmin";

const routesTag = Router()

const tagController = new TagController()

routesTag.post('/tags', ensureAdmin, tagController.handle)

export { routesTag}