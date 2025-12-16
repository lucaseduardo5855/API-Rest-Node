import User from '../models/User.js';

class UserController {
  // A função chama STORE para bater com a rota
  async store(req, res) {
    try {
      const novoUser = await User.create(req.body); // pega o corpo da requisição pelo body do Sequelize
      return res.json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message), // mapeia os erros e retorna só as mensagens
      });
    }
  }

  //INDEX - lista todos os usuários
  async index(req, res) {
    try {
      const users = await User.findAll();
      console.log('USER ID', req.userId);
      console.log('USER EMAIL', req.userEmail);
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  //SHOW - cria um usuário
  async show(req, res) {
    try {
      const { id } = req.params; // pega o id dos parâmetros da requisição com destructuring
      const users = await User.findByPk(id); // findByPk = é para buscar pela chave primária (id)

      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

// UPDATE - atualiza um usuário
async update(req, res) {
  try {
    // 1. Verificação inicial do ID
    if (!req.params.id) {
      return res.status(400).json({
        errors: ['ID não enviado.'],
      });
    }

    // 2. Busca o usuário
    const user = await User.findByPk(req.params.id);

    // 3. Verifica se o usuário existe
    if (!user) {
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

    const novosDados = await user.update(req.body);
    return res.json(novosDados);

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
    if (!req.params.id) { //  Verificação inicial do ID
      return res.status(400).json({
        errors: ['ID não enviado.'],
      });
    }

    const user = await User.findByPk(req.params.id); // busca o usuário se existe

    if (!user) { // Verifica se o usuário existe
      return res.status(400).json({
        errors: ['Usuário não existe'],
      });
    }

   await user.destroy(); // deleta o usuário
    return res.json(user);

  } catch (e) {
    console.log(e);
    return res.status(400).json({
      errors: e.erros.map((err) => err.message),
    });
  }
}
}

export default new UserController();
