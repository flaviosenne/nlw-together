import { Router } from "express";
import { routesUser } from "./user";

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({msg:'olá'})
})
routes.use(routesUser)

export { routes}