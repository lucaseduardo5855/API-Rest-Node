"use strict";module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.changeColumn('alunos', 'email', //changeColumn para modificar uma coluna
      {
       type: Sequelize.STRING,
       unique: true, //definindo que o email deve ser unico
       allowNull: false,
      }
    );
  },

  down() {

  }
};
