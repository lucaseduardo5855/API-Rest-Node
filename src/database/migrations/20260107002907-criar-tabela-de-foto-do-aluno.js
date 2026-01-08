module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      created_at: { // <--- O erro diz que isso aqui está faltando
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: { // <--- E isso também
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('fotos');
  },
};
