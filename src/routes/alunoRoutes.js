import { Router} from 'express'; //estamos importando apenas o router
import AlunoController from '../controllers/AlunoController.js'; //importando o Homecontroller

const router = new Router();

router.get('/', AlunoController.index);

export default router;
