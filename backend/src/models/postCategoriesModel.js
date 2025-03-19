const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const PostCategories = sequelize.define(
  'PostCategories',
  {
    post_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    category_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  }, {
    tableName: 'post_categories', 
    timestamps: true,  
    underscored: true, 
  }
);

module.exports = PostCategories;