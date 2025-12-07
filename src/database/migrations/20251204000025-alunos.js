module.exports = {
  async up (queryInterface, Sequelize) { //Criar a migration

    await queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false, //nao deixa o nome ficar em branco
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      created_at: { //data de criacao q esta na configuração do database
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: { //data de atualizacao q esta na configuração do database
        type: Sequelize.DATE,
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down (queryInterface)  { //Desfazer a migration

     await queryInterface.dropTable('alunos');

  }
};
