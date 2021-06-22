import { Router } from "express";
import { UserController } from "../../controller/UserController";

const routesUser = Router()

const userController = new UserController()

routesUser.post('/users', userController.handle)

export { routesUser}