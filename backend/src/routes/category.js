const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");

const { addCategory,viewCategory, viewAllCategory, editCategory, deleteCategory } = require("../controllers/categoryController");

router.post("/add", verifyToken, addCategory);
router.put("/edit/:id", verifyToken, editCategory);
router.delete("/delete/:id", verifyToken, deleteCategory);
router.get("/view/:id", verifyToken, viewCategory);
router.get("/view", verifyToken, viewAllCategory);

module.exports = router;