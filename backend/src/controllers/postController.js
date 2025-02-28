const  slugify = require('slugify');
const  Post  = require("../models/postModel");
const  User  = require("../models/userModel");

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
    try{
        const post = await Post.findOne({where:{post_id: req.params.id}});
        // const post = await Post.findOne(
        //     {where:{post_id: req.params.id},
        //     include:[
        //         {
        //             model:User,
        //             attributes : ['username','email','account_id']
        //         }
        //     ]
        // });
        if(post){
            return res.status(200).json({message: "Post found",data:post, success: true});
        }else{
            return res.status(400).json({message: "No post found", success: false});
        }
    }catch(err){
        return res.status(400).json({message: "Failed :"+err, success: false});
    }
}


//view all post
const viewAllPost = async (req, res) => {
    try{
        const posts = await Post.findAll();
        return res.status(400).json({message: "All posts",data:posts, success: true});
    }catch(err){
        return res.status(400).json({message: "Failed to fetch : "+err, success: false});
    }
}


//view my posts account-id wist
const viewMyPosts = async (req, res) => {
    try{
        const posts = await Post.findAll({where:{user_id:req.account_id}});
        return res.status(400).json({message: "My posts",data:posts, success: true});
    }catch(error){
        return res.status(400).json({message: "Failed to fetch :"+err, success: false}); 
    }
}


//Edit post
const editPost = async (req, res) => {
    const {title,body} = req.body;
    if(!title || !body) return res.status(400).json({message: "Require all fields", success: false});
    try{
        const post = await Post.findOne({where:{post_id: req.params.id,user_id:req.account_id}});
        if(post){
            const slug = slugify(title, '_');
            await post.update({ title , slug , body });
            return res.status(200).json({message: "Post edit success", success: true});
        }else{
            return res.status(400).json({message: "No post found / Unauthorised", success: false});
        }
    }catch(error){
        return res.status(400).json({message: "Failed : "+error, success: false}); 
    }
}


//Change status of post
const changeStatusPost = async (req, res) => {
    try{
        const post = await Post.findOne({where:{post_id: req.params.id,user_id:req.account_id}});
        if(post){
            const status = req.query.status;
            const statusEnum = ['draft', 'published', 'blocked'];
            if (!statusEnum.includes(status)) {
                return res.status(400).json({message: "Changable status not found or not valid", success: false});
            }else{
                await post.update({ status });
                return res.status(200).json({message: "Post status change success", success: true});
            }
        }else{
            return res.status(400).json({message: "No post found / Unauthorised", success: false});
        }
    }catch(error){
        return res.status(400).json({message: "Failed : "+error, success: false}); 
    }
}



//delete post for only admin
const deletePost = async (req, res) => {
    try{
        const post = await Post.findOne({where:{post_id: req.params.id,user_id:req.account_id}});
        if(post){
            await post.destroy();
            return res.status(200).json({message: "Post delete success", success: true});
        }else{
            return res.status(400).json({message: "No post found / Unauthorised", success: false});
        }
    }catch(error){
        return res.status(400).json({message: "Failed : "+error, success: false}); 
    }
}



module.exports = {addPost, editPost, changeStatusPost, deletePost , viewPost, viewAllPost, viewMyPosts}