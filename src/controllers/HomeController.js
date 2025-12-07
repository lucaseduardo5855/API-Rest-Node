import { Router } from 'express'; //estamos importando apenas o router

class HomeController { //definindo a classe HomeController
    index(req, res) {
      res.json({
        tudoCerto: true,
      });
    }
  }

export default new HomeController();
