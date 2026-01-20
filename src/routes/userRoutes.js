import { Router } from "express";
import userController from "../controllers/UserController.js";
import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

//Não deveria existir
//router.get('/', userController.index); //lista todos os usuarios
//router.get('/:id',  userController.show); //mostra um usuario

router.post("/", userController.store); //cria usuario // Atualizacao forçada
router.put("/", loginRequired, userController.update); //atualiza usuario
router.delete("/", loginRequired, userController.delete); //deleta usuario

export default router;
