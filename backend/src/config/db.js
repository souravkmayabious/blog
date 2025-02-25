const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("blog_sequelize", "root", "", {
  host: "localhost",
  // port: 3306,
  dialect: "mysql",
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