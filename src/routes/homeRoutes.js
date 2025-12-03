import { Router} from 'express'; //estamos importando apenas o router
import homeController from '../controllers/HomeController.js';


const router = new Router();

router.get('/', homeController.index);

export default router;
