const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");

router.get("/", (req, res) => {
     res.send("Hello from Auth route!");
});

router.post("/register", register);

module.exports = router;