import { Model, DataTypes } from 'sequelize'; // 1. Importando DataTypes

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      // 2. Usando DataTypes para definir os tipos
      nome: DataTypes.STRING,
      sobrenome: DataTypes.STRING,
      email: DataTypes.STRING,
      idade: DataTypes.INTEGER,
      peso: DataTypes.FLOAT,
      altura: DataTypes.FLOAT,
    }, {
      sequelize,
    });
    return this;
  }
}
