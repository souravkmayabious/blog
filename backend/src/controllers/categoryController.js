const  slugify = require('slugify');
const  Category  = require("../models/blogCategoryModel");

//Add Category
const addCategory = async (req, res) => {
    const {name} = req.body;
    if(!name) return res.status(400).json({message: "Require name fields", success: false});
    try{
        const slug = slugify(name, '_');
        const category = await Category.create({
            name,
            slug,
            user_id:req.account_id
          });
        if (category) {
            return res.status(200).json({message: "Category created success", success: true});
        } else {
            return res.status(400).json({message: "Failed to Category post", success: false});
        }
    }catch(err){
        return res.status(400).json({message: "Failed :"+ err, success: false});
    }
}


//view single Category
const viewCategory = async (req, res) => {
    try{
        const category = await Category.findOne({where:{category_id: req.params.id}});
        if(category){
            return res.status(200).json({message: "category found",data:category, success: true});
        }else{
            return res.status(400).json({message: "No category found", success: false});
        }
    }catch(err){
        return res.status(400).json({message: "Failed :"+err, success: false});
    }
}


//view all Category
const viewAllCategory = async (req, res) => {
    try{
        const category = await Category.findAll();
        return res.status(400).json({message: "All category",data:category, success: true});
    }catch(err){
        return res.status(400).json({message: "Failed to fetch : "+err, success: false});
    }
}



//Edit Category
const editCategory = async (req, res) => {
    const {name} = req.body;
    if(!name) return res.status(400).json({message: "Require name field", success: false});
    try{
        const category = await Category.findOne({where:{category_id: req.params.id,user_id:req.account_id}});
        if(category){
            const slug = slugify(name, '_');
            await category.update({ name , slug});
            return res.status(200).json({message: "Category edit success", success: true});
        }else{
            return res.status(400).json({message: "No category found / Unauthorised", success: false});
        }
    }catch(error){
        return res.status(400).json({message: "Failed : "+error, success: false}); 
    }
}






//delete post for only admin
const deleteCategory = async (req, res) => {
    try{
        const category = await Category.findOne({where:{category_id: req.params.id,user_id:req.account_id}});
        if(category){
            await category.destroy();
            return res.status(200).json({message: "category delete success", success: true});
        }else{
            return res.status(400).json({message: "No category found / Unauthorised", success: false});
        }
    }catch(error){
        return res.status(400).json({message: "Failed : "+error, success: false}); 
    }
}



module.exports = {addCategory, viewCategory, viewAllCategory, editCategory, deleteCategory }