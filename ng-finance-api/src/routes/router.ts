import { Router } from 'express'
import { LoginController } from '../controllers/login.controller';
import { UserController } from '../controllers/register.controller'
import { authTokenMiddleware } from '../middlewares/authToken';
import registerValidate from '../middlewares/registerValidation';

const routes = Router()
const userController = new UserController();
const loginController = new LoginController();
const middleware = new authTokenMiddleware();

routes.post('/user', 
registerValidate.validateSchema,
(req, res) => userController.create(req, res));

routes.post('/login', (req, res) => loginController.authUser(req,res));

routes.use((req, res, next) => middleware.authToken(req, res, next));

routes.get('/user/:id', (req, res) => userController.getUserById(req, res));

export default routes