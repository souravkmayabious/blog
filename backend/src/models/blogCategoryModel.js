const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const Category = sequelize.define(
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
    },
    status: {
      type: DataTypes.ENUM('active', 'inactive'),
      defaultValue: 'active',
      allowNull: true,
    },
  }, {
    tableName: 'categories', 
    timestamps: true,  
    underscored: true, 
  }
);

module.exports = Category;