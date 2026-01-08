import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import Aluno from '../models/Aluno.js';
import User from '../models/User.js';
import Foto from '../models/Foto.js';


const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection)); //acorda cada tabela para trabalhar no bd
models.forEach((model) => model.associate && model.associate(connection.models)); //verifica se o model tem associate, se tiver ele chama a funcao associate passando todos os models cadastrados, caso contrario ele nao faz nada
