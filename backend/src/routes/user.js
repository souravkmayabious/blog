const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");
const { profile, updateProfile, updatePassword } = require("../controllers/userController");

router.get("/profile",verifyToken,profile);
router.put("/profileUpdate",verifyToken,updateProfile);
router.put("/passwordUpdate",verifyToken,updatePassword);

module.exports = router;