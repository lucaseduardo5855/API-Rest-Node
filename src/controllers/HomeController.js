import Aluno from '../models/Aluno.js';

class HomeController { //definindo a classe HomeController
    async index(req, res) {
      const novoAluno = await Aluno.create({
        nome: 'Lucas',
        sobrenome: 'Eduardo',
        email: 'Lucas.eduardo5855@gmail.com',
        idade: 22,
        peso: 66,
        altura: 1.70,
      })
      res.json(novoAluno);
    }
  }

export default new HomeController();
