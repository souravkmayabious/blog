const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.MYSQL_DATABSE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  // port: process.env.SEQUELIZE_PORT,
  dialect: process.env.SEQUELIZE_DIALECT,
  logging:process.env.SEQUELIZE_LOGGING === 'true' ? console.log : false   //show query which is executing
});

const dbConnection = async () => {
   try {
    await sequelize.authenticate();
    console.log("Database Connection has been successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {dbConnection , sequelize};