import { Router } from "express";
import { routesCompliment } from "./compliment";
import { routesTag } from "./tag";
import { routesUser } from "./user";

const routes = Router()

routes.get('/', (req, res) => {
    return res.json({msg:'olá'})
})
routes.use(routesUser)
routes.use(routesTag)
routes.use(routesCompliment)

export { routes}