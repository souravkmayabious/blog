const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");

const { addTag, editTag, deleteTag , viewTag, viewAllTag } = require("../controllers/tagsController");

router.post("/add", verifyToken, addTag);
router.put("/edit/:id", verifyToken, editTag);
router.delete("/delete/:id", verifyToken, deleteTag);
router.get("/view/:id", verifyToken, viewTag);
router.get("/view", verifyToken, viewAllTag);

module.exports = router;