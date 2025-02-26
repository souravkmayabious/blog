const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const { profile, updateProfile } = require("../controllers/userController");

router.get("/profile",verifyToken,profile);
router.put("/profileUpdate",verifyToken,updateProfile);

module.exports = router;