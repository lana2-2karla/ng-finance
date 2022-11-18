import { Router } from 'express'
import { UserController } from '../controllers/register.controller'
import registerValidate from '../middlewares/registerValidation';

const routes = Router()
const userController = new UserController();

routes.post('/user', 
registerValidate.validateSchema,
(req, res) => userController.create(req, res))


export default routes