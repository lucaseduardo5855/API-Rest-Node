import { Router} from 'express'; //estamos importando apenas o router
import UserController from '../controllers/UserController.js'; //importando o Homecontroller

const router = new Router();

router.post('/', UserController.store);

export default router;

/*
index = lista todos os usuarios > get
store/create = cria um novo usuario > post
delete = apaga um usuario > delete
show = mostra um usuario > get
update = atualiza um usuario > put ou patch
*/
