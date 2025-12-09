import Aluno from '../models/Aluno.js';

class HomeController { //definindo a classe HomeController
    async index(req, res) {
      const novoAluno = await Aluno.create({
        nome: 'Maria',
        sobrenome: 'Luiza',
        email: 'Luiza.eduardo5855@gmail.com',
        idade: 19,
        peso: 66,
        altura: 1.50,
      })
      res.json(novoAluno);
    }
  }

export default new HomeController();
