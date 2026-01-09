"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);

//STORE - cria um usuário
class UserController {
  // A função chama STORE para bater com a rota
  async store(req, res) {
    try {
      const novoUser = await _Userjs2.default.create(req.body); // pega o corpo da requisição pelo body do Sequelize
      const {id, nome, email} = novoUser;// pega os campos que queremos apenas
      return res.json({id, nome, email}); // retorna só os campos desejados
  
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // mapeia os erros e retorna só as mensagens
      });
    }
  }

  //INDEX - lista todos os usuários
  async index(req, res) {
    try {
      const users = await _Userjs2.default.findAll({attributes: ['id', 'nome', 'email']}); // findAll = busca todos os usuários, mas só os atributos id, nome e email

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  //SHOW - cria um usuário
async show(req, res) {
    try {
      const user = await _Userjs2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email'],
      });

      return res.json(user);
    } catch (e) {
      return res.json(null);
    }
  }

// UPDATE - atualiza um usuário
async update(req, res) {
  try {
    // 2. Busca o usuário
    const user = await _Userjs2.default.findByPk(req.userId);//findybypk faz a busca pelo id que está na requisição

    // 3. Verifica se o usuário existe
    if (!user) {
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    const novosDados = await user.update(req.body);// Atualiza os dados do usuário com o que veio no corpo da requisição
    const {id, nome, email} = novosDados;
    return res.json({id, nome, email});

  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errors: e.erros.map((err) => err.message),
    });
  }
}

  //DELETE - deleta um usuário
  async delete(req, res) {
  try {
    const user = await _Userjs2.default.findByPk(req.userId); // busca o usuário se existe

    if (!user) { // Verifica se o usuário existe
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

   await user.destroy(); // deleta o usuário
   return res.json(null);

  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errors: e.erros.map((err) => err.message),
    });
  }
}
}

exports. default = new UserController();
