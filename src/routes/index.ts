import { Router } from "express";
import { routesTag } from "./tag";
import { routesUser } from "./user";

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({msg:'olá'})
})
routes.use(routesUser)
routes.use(routesTag)

export { routes}