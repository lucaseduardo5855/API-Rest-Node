import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres'
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres'
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'E-mail já existe'
        },
        validate: {
          isEmail: {
            msg: 'Email invalido'
          },
        },
      },
      idade: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero inteiro'
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
         isInt: {
            msg: 'Peso precisa ser um numero inteiro ou de ponto flutuante'
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
         isInt: {
            msg: 'Altura precisa ser um numero inteiro ou de ponto flutuante'
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  static associate(models) { // criando relacao entre aluno e foto
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });// um aluno tem muitas fotos, hasMany é usado para relacao 1 para muitos
  }
}
