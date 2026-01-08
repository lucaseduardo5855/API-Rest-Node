import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export default async (req, res, next) => {
  const { authorization} = req.headers;//pegando o token do cabeçalho da requisição do INSOMNIA

  if(!authorization) {//se não tiver o token ele pede para logar
    return res.status(401).json({ errors: ['Login required']
    });
  }

  const [, token] = authorization.split(' '); //pegando apenas o token, ignorando a palavra Bearer

  try{
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email} = dados;//pegando o id e email do token decodificado

    const user = await User.findOne({ where: { id, email}}) // Verifica se o usuário é valido no banco de dados

    if(!user) {
      return res.status(401).json({ errors: ['Usuário inválido']
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  }catch (e) {
    return res.status(401).json({ errors: ['Token Expirado ou Inválido']
    });
  }
};
