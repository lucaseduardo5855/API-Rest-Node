import Sequelize, { Model } from "sequelize";
import appConfig from "../config/app.Config.js";

export default class Foto extends Model {
  static init(sequelize) {
    super.init(
      {
        originalname: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo não pode ficar vazio",
            },
          },
        },
        filename: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            notEmpty: {
              msg: "Campo não pode ficar vazio",
            },
          },
        },
        url: {
          // campo virtual, nao existe na tabela do banco de dados
          type: Sequelize.VIRTUAL,
          get() {
            return `${appConfig.url}/images/${this.getDataValue("filename")}`; // retorna a url completa da foto
          },
        },
      },
      {
        sequelize,
        tableName: "fotos",
      },
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: "aluno_id" }); // este modelo pertence a outro model, essa ligacao eh feita pela chave estrangeira aluno_id
  }
}
