require("dotenv").config();
const express = require("express");
const cors = require("cors");
const {dbConnection} = require("./src/config/db");
const  User  = require("./src/models/userModel");
const  Post  = require("./src/models/postModel");
const  Categorie  = require("./src/models/categoryModel");
const  Tags  = require("./src/models/tagsModel");
const PostCategories = require("./src/models/postCategoriesModel");
const PostTags = require("./src/models/postTagsModel");


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
app.use("/api/post", require("./src/routes/post"));
app.use("/api/category", require("./src/routes/category"));
app.use("/api/tags", require("./src/routes/tags"));

app.use('*',(req,res) => {
    res.status(404).json({status:'Fail',message:'Route not found'})
});

//sync database
// User.sync({ force: true });
// Post.sync({ force: true });
// Categorie.sync({ force: true });
// Tags.sync({ force: true });
// PostCategories.sync({ force: true });
// PostTags.sync({ force: true });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
dbConnection();
