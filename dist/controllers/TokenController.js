"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

class TokenController { //definindo a classe TokenController
    async store(req, res) {
      const {email = '', password = ''} = req.body; //pegando email e senha do corpo da requisição

      if(!email || !password) {
        return res.status(401).json({ errors: ['Credenciais invalidas']})
      }

      const user = await _Userjs2.default.findOne({ where: { email } }); //procurando o usuario pelo email - findoneone retorna o primeiro que encontrar

      if(!user) {
        return res.status(401).json({ errors: ['Usuario nao existe']})
      }

      if(!(await user.passwordisValid(password))) { //verificando se a senha é válida q setamos no user.js
        return res.status(401).json({ errors: ['Senha invalida']})
      }

      const {id} = user; //pegando o id do usuario
      const token = _jsonwebtoken2.default.sign({ id, email}, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      }); //gerando o token JWT- sign recebe 3 parametros: 1º o payload (dados que queremos colocar no token), 2º a chave secreta para assinar o token, 3º opções do token (tempo de expiração)

      return res.json({token}); //retornando o token
    }
  }

exports. default = new TokenController();
