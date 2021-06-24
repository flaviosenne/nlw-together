import { Router } from "express";
import { ComplimentController } from "../../controller/ComplimentController";
import { ensureAdmin } from "../../middlewares/ensureAdmin";

const routesCompliment = Router()

const complimentController = new ComplimentController()

routesCompliment.post('/compliments', ensureAdmin, complimentController.handle)

export { routesCompliment}