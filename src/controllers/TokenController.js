import User from '../models/User.js';
import jwt from 'jsonwebtoken';

class TokenController { //definindo a classe TokenController
    async store(req, res) {
      const {email = '', password = ''} = req.body; //pegando email e senha do corpo da requisição

      if(!email || !password) {
        return res.status(401).json({ errors: ['Credenciais invalidas']})
      }

      const user = await User.findOne({ where: { email } }); //procurando o usuario pelo email

      if(!user) {
        return res.status(401).json({ errors: ['Usuario nao existe']})
      }

      if(!(await user.passwordisValid(password))) {
        return res.status(401).json({ errors: ['Senha invalida']})
      }

      const {id} = user;
      const token = jwt.sign({ id, email}, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      }); //gerando o token JWT

      return res.json({token}); //retornando o token
    }
  }

export default new TokenController();
