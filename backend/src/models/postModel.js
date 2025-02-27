const { DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const Post = sequelize.define(
  'Post',
  {
    post_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    user_id:{
        type: DataTypes.STRING(100),
        allowNull: false,
        // references: 'users',
        // referenceKey: 'user_id'
        references: {
          model: 'users',      // Table name
          key: 'account_id'       // Column name in the 'users' table
      }
    },
    title:{
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    slug:{
        type: DataTypes.STRING(200),
        allowNull: true,
        unique: true,
    },
    body:{
        type:DataTypes.TEXT(),
        allowNull: false,
    },
    status:{
        type: DataTypes.ENUM('draft', 'published', 'blocked'),
        defaultValue: 'draft',
        allowNull: true,
    }
  }, {
    tableName: 'posts', 
    timestamps: true,  
    underscored: true, 
  }
);

console.log(Post === sequelize.models.Post); 

module.exports = Post;