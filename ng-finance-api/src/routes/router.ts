import { Router } from 'express'
import { LoginController } from '../controllers/login.controller';
import { UserController } from '../controllers/register.controller'
import registerValidate from '../middlewares/registerValidation';

const routes = Router()
const userController = new UserController();
const loginController = new LoginController();

routes.post('/user', 
registerValidate.validateSchema,
(req, res) => userController.create(req, res));

routes.post('/login', (req, res) => loginController.authUser(req,res));


export default routes