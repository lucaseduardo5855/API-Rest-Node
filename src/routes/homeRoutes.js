import { Router} from 'express'; //estamos importando apenas o router
import HomeController from '../controllers/HomeController.js'; //importando o Homecontroller

const router = new Router();

router.get('/', HomeController.index);

export default router;
