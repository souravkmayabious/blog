const { Sequelize, DataTypes } = require('sequelize');
const {sequelize} = require('../config/db');

const User = sequelize.define(
  'User',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    account_id: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'author', 'subscriber'),
      defaultValue: 'subscriber',
      allowNull: true,
    },
    // created_at: {
    //   type: DataTypes.TIMESTAMP,
    //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    //   allowNull: false,
    // },
    // updated_at: {
    //   type: DataTypes.TIMESTAMP,
    //   defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    //   allowNull: false,
    //   onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
    // }
  }, {
     //freezeTableName: true, // Model tableName will be the same as the model name
    tableName: 'users', // Specify the table name
    timestamps: true,  
    underscored: true,  // Use snake_case for column names in the database
  }
);


// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports = User;