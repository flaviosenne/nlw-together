import { Router } from "express";
import { TagController } from "../../controller/TagController";
import { ensureAdmin } from "../../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticate";

const routesTag = Router()

const tagController = new TagController()

routesTag.post('/tags', ensureAuthenticated, ensureAdmin,  tagController.handle)
routesTag.get('/tags', tagController.listAll)

export { routesTag}