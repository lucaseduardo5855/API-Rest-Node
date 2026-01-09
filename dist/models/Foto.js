"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appConfigjs = require('../config/app.Config.js'); var _appConfigjs2 = _interopRequireDefault(_appConfigjs);

 class Foto extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio'
          },
        },
      },
      filename: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ficar vazio'
          },
        },
      },
      url: { // campo virtual, nao existe na tabela do banco de dados
        type: _sequelize2.default.VIRTUAL,
        get() {
          return `${_appConfigjs2.default.url}/imagens/${this.getDataValue('filename')}`; // retorna a url completa da foto
        }
        },
    }, {
      sequelize,
      tableName: 'fotos',
    });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' }); // este modelo pertence a outro model, essa ligacao eh feita pela chave estrangeira aluno_id
  }
} exports.default = Foto;
