const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/authMiddleware");

const { addPost, editPost, changeStatusPost, deletePost , viewPost, viewAllPost, viewMyPosts } = require("../controllers/postController");

router.post("/add", verifyToken, addPost);
router.put("/edit/:id", verifyToken, editPost);
router.put("/change-status/:id", verifyToken, changeStatusPost);
router.delete("/delete/:id", verifyToken, deletePost);
router.get("/view/:id", verifyToken, viewPost);
router.get("/view-all", verifyToken, viewAllPost);
router.get("/my-posts", verifyToken, viewMyPosts);

module.exports = router;