const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const PostTags = sequelize.define(
  'PostTags',
  {
    post_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tag_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  }, {
    tableName: 'post_tags', 
    timestamps: true,  
    underscored: true, 
  }
);

module.exports = PostTags;