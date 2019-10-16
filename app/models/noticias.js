module.exports = (sequelize, DataTypes) => {
    const Noticias = sequelize.define('Noticias', {
      titulo: DataTypes.STRING,
      data: DataTypes.DATE,
      resumo: DataTypes.TEXT,
      imagem: DataTypes.TEXT,
      texto: DataTypes.TEXT
    });
  
    return Noticias;
  }