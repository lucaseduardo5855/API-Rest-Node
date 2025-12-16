import { Router} from 'express'; //estamos importando apenas o router
import TokenController from '../controllers/TokenController.js'; //importando o Homecontroller

const router = new Router();

router.post('/', TokenController.store); //vamos criar um novo endpoint post para criar token

export default router;
