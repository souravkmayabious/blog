const  User  = require("../models/userModel");

const profile = async (req,res) =>{
    try{
        const user = await User.findOne({ where: { account_id : req.account_id } });
        return res.status(400).json({message: "profile fetched success",data:user, success: true});
    }catch(err){
        return res.status(400).json({message: "Failed to fetch"+err, success: false});
    }
}


const updateProfile =  async (req,res) =>{
    const {username,email} = req.body;
    if(!username || !email) return res.status(400).json({message: "Require all fields"});
    try{
        const user = await User.findOne({ where: { account_id: req.account_id } });
        if (user) {
            await user.update({ username: username, email: email});
            return res.status(200).json({message: "profile update success", success: true});
        } else {
            return res.status(400).json({message: "pUser not found", success: false});
        }
    }catch(err){
        return res.status(400).json({message: "Failed"+err, success: false});
    }
}





module.exports = {profile, updateProfile}