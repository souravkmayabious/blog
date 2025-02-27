const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const Categorie = sequelize.define(
  'categories',
  {
    category_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    slug:{
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true,
    }
  }, {
    tableName: 'categories', 
    timestamps: true,  
    underscored: true, 
  }
);

module.exports = Categorie;