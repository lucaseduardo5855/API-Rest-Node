import { Router} from 'express';
import userController from '../controllers/UserController.js';
import loginRequired from '../middlewares/loginRequired.js';

const router = new Router();

//Não deveria existir
//router.get('/', userController.index); // Removi o 'loginRequired'//router.get('/:id', userController.show);
//router.get('/:id',  userController.show);

router.post('/', userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;
