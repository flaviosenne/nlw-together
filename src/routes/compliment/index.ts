import { Router } from "express";
import { ComplimentController } from "../../controller/ComplimentController";
import { ensureAuthenticated } from "../../middlewares/ensureAuthenticate";

const routesCompliment = Router()

const complimentController = new ComplimentController()

routesCompliment.post('/compliments', ensureAuthenticated, complimentController.handle)
routesCompliment.get('/compliments/user-receiver', ensureAuthenticated, complimentController.listByUserReceiverCompliments)
routesCompliment.get('/compliments/user-sender', ensureAuthenticated, complimentController.listByUserSenderCompliments)

export { routesCompliment}