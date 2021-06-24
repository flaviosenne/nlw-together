import { Router } from "express";
import { AutheticateUserController } from "../../controller/AutheticateUserController";
import { UserController } from "../../controller/UserController";

const routesUser = Router()

const userController = new UserController()
const auth = new AutheticateUserController()

routesUser.post('/users', userController.handle)

routesUser.post('/login', auth.handle)

export { routesUser}