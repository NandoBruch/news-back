module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Noticias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      titulo: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      data: {
        allowNull: false,
        type: DataTypes.DATE,
        },
      resumo: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      imagem: {
        allowNull: false,
        type: DataTypes.STRING
      },
      texto: {
        allowNull: false,
        type: DataTypes.TEXT
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: queryInterface => queryInterface.dropTable('Noticias')
  
};