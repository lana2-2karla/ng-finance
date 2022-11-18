import { Router } from 'express'
import { UserController } from '../controllers/user.controller'

const routes = Router()
const userController = new UserController();

routes.post('/user', (req, res) => userController.create(req, res))


export default routes