import User from '../models/User.js';

class UserController { //definindo a classe HomeController
    async store(req, res) {
      try{
  const novoUser = await User.create(req.body);
      res.json(novoUser);
      }catch(e) {
        res.status(400).json({
          errors: e.errors.map((err) => err.message)}); //Retorna um array com as mensagens de erro
      }
    }
  }

export default new UserController();
