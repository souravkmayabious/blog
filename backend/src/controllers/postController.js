const  slugify = require('slugify');
const  Post  = require("../models/postModel");

//Add post
const addPost = async (req, res) => {
    const {title,body} = req.body;
    if(!title || !body) return res.status(400).json({message: "Require all fields", success: false});
    try{
        const slug = slugify(title, '_');
        const post = await Post.create({
            title,
            user_id : req.account_id,
            slug,
            body
          });
        if (post) {
            return res.status(200).json({message: "Post created success", success: true});
        } else {
            return res.status(400).json({message: "Failed to create post", success: false});
        }
    }catch(err){
        return res.status(400).json({message: "Failed :"+err, success: false});
    }
}


//view single post
const viewPost = async (req, res) => {

}


//view all post
const viewAllPost = async (req, res) => {
    try{
        const posts = await Post.findAll();
        return res.status(400).json({message: "all posts",data:posts, success: true});
    }catch(err){
        return res.status(400).json({message: "Failed to fetch "+err, success: false});
    }
}


//view my posts account-id wist
const viewMyPosts = async (req, res) => {

}


//Edit post
const editPost = async (req, res) => {

}


//Change status of post
const changeStatusPost = async (req, res) => {

}


//delete post for only admin
const deletePost = async (req, res) => {

}



module.exports = {addPost, editPost, changeStatusPost, deletePost , viewPost, viewAllPost, viewMyPosts}