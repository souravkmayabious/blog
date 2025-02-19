const { Sequelize } = require("sequelize");

const dbConnection = async () => {
  const sequelize = new Sequelize("blog", "root", "", {
    host: "localhost",
    // port: 3306,
    dialect: "mysql",
  });

  try {
    await sequelize.authenticate();
    console.log("Database Connection has been successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = dbConnection;