require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {dbConnection} = require("./src/config/db");
const  User  = require("./src/models/userModel");


const app = express();
app.use(cors());
app.use(express.json());

require('dotenv').config();

app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});

app.get("/api", (req, res) => {
    res.send("Hello from Api Endpoint - Backend!");
});


// Routes
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/user", require("./src/routes/user"));
// app.use("/api/posts", require("./routes/posts"));
// app.use("/api/categories", require("./routes/categories"));

//sync database
// User.sync();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
dbConnection();
