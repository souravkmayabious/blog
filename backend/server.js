require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnection = require("./src/config/db");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello from Backend!");
});

// Routes
app.use("/api/auth", require("./src/routes/auth"));
// app.use("/api/users", require("./routes/users"));
// app.use("/api/posts", require("./routes/posts"));
// app.use("/api/categories", require("./routes/categories"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
dbConnection();
