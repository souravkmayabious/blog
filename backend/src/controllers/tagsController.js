const  slugify = require('slugify');
const  Tags  = require("../models/tagsModel");

//Add Tag
const addTag = async (req, res) => {
    const {name} = req.body;
    if(!name) return res.status(400).json({message: "Require name fields", success: false});
    try{
        const slug = slugify(name, '_');
        const tag = await Tags.create({
            name,
            slug,
            user_id:req.account_id
          });
        if (tag) {
            return res.status(200).json({message: "Tag created success", success: true});
        } else {
            return res.status(400).json({message: "Failed to add Tag", success: false});
        }
    }catch(err){
        return res.status(400).json({message: "Failed :"+ err, success: false});
    }
}


//view single Tag
const viewTag = async (req, res) => {
    try{
        const tag = await Tags.findOne({where:{tag_id: req.params.id}});
        if(tag){
            return res.status(200).json({message: "Tag found", data:tag, success: true});
        }else{
            return res.status(400).json({message: "No Tag found", success: false});
        }
    }catch(err){
        return res.status(400).json({message: "Failed :"+err, success: false});
    }
}


//view all Tag
const viewAllTag = async (req, res) => {
    try{
        const tag = await Tags.findAll();
        return res.status(200).json({message: "All tags",data:tag, success: true});
    }catch(err){
        return res.status(400).json({message: "Failed to fetch : "+err, success: false});
    }
}



//Edit Tag
const editTag = async (req, res) => {
    const {name} = req.body;
    if(!name) return res.status(400).json({message: "Require name field", success: false});
    try{
        const tag = await Tags.findOne({where:{tag_id: req.params.id,user_id:req.account_id}});
        if(tag){
            const slug = slugify(name, '_');
            await tag.update({ name , slug});
            return res.status(200).json({message: "Tag edit success", success: true});
        }else{
            return res.status(400).json({message: "No tag found / Unauthorised", success: false});
        }
    }catch(error){
        return res.status(400).json({message: "Failed : "+error, success: false}); 
    }
}






//delete for only admin
const deleteTag = async (req, res) => {
    try{
        const tag = await Tags.findOne({where:{tag_id: req.params.id,user_id:req.account_id}});
        if(tag){
            await tag.destroy();
            return res.status(200).json({message: "Tag delete success", success: true});
        }else{
            return res.status(400).json({message: "No tag found / Unauthorised", success: false});
        }
    }catch(error){
        return res.status(400).json({message: "Failed : "+error, success: false}); 
    }
}



module.exports = { addTag, editTag, deleteTag , viewTag, viewAllTag }