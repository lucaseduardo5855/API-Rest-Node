import { Router } from "express"; //estamos importando apenas o router
import AlunoController from "../controllers/AlunoController.js"; //importando o Homecontroller

import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

router.get("/", AlunoController.index);
router.post("/", loginRequired, AlunoController.store);
router.put("/:id", loginRequired, AlunoController.update);
router.get("/:id", AlunoController.show);
router.delete("/:id", loginRequired, AlunoController.delete);

export default router;
