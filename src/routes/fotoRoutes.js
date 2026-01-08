import { Router} from 'express'; //estamos importando apenas o router
import loginRequired from '../middlewares/loginRequired.js'; //importando o middleware de login
import FotoController from '../controllers/FotoController.js'; //importando o fotocontroller

const router = new Router();

router.post('/', loginRequired, FotoController.store);

export default router;
