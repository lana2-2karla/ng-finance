import { Router } from 'express'
import { AccountController } from '../controllers/account.controller';
import { LoginController } from '../controllers/login.controller';
import { UserController } from '../controllers/register.controller'
import { TransactionController } from '../controllers/transaction.controller';
import { authTokenMiddleware } from '../middlewares/authToken';
import registerValidate from '../middlewares/registerValidation';

const routes = Router()
const userController = new UserController();
const loginController = new LoginController();
const middleware = new authTokenMiddleware();
const accountController = new AccountController();
const transactionController = new TransactionController();

routes.post('/user', 
registerValidate.validateSchema,
(req, res) => userController.create(req, res));

routes.post('/login', (req, res) => loginController.authUser(req,res));

routes.use((req, res, next) => middleware.authToken(req, res, next));

routes.get('/user/:id', (req, res) => userController.getUserById(req, res));

routes.get('/account/user', (req, res) => accountController.getAccount(req, res));

routes.post('/transaction/user', (req, res) => transactionController.create(req, res));

routes.get('/transaction/cashin', (req, res) => transactionController.getByTransactionCashIn(req, res));

routes.get('/transaction/cashout', (req, res) => transactionController.getByTransactionCashOut(req, res));

export default routes