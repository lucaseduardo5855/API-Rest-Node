import { Router} from 'express'; //estamos importando apenas o router
import loginRequired from '../middlewares/loginRequired.js';

import FotoController from '../controllers/FotoController.js'; //importando o Homecontroller

const router = new Router();

router.post('/',  loginRequired, FotoController.store);

export default router;
