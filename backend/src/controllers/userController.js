const  User  = require("../models/userModel");
const bcrypt = require('bcryptjs');

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
    if(!username || !email) return res.status(400).json({message: "Require all fields", success: false});
    try{
        const user = await User.findOne({ where: { account_id: req.account_id } });
        if (user) {
            await user.update({ username: username, email: email});
            return res.status(200).json({message: "profile update success", success: true});
        } else {
            return res.status(400).json({message: "User not found", success: false});
        }
    }catch(err){
        return res.status(400).json({message: "Failed :"+err, success: false});
    }
}


const updatePassword = async (req,res) =>{
    const {oldPassword, newPassword, confirmPassword} = req.body;
    if(!oldPassword || !newPassword || !confirmPassword) return res.status(400).json({message: "Required all fields",success: false});
    if(newPassword !== confirmPassword) return res.status(400).json({message: "New password & confirm password not matched",success: false});
    try{
        const user = await User.findOne({where : {account_id : req.account_id}});
        if (user) {
            const matchPassword = await bcrypt.compare(oldPassword, user.password);
            if(matchPassword){
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(newPassword, salt);
                await user.update({ password: hash});
                return res.status(200).json({message: "password update success", success: true});
            }else{
                return res.status(400).json({message: "Old password not matched", success: false});
            }
        } else {
            return res.status(400).json({message: "User not found", success: false});
        }
    }catch(err){
        return res.status(400).json({message: "Failed :"+err, success: false});
    }
}



module.exports = {profile, updateProfile, updatePassword}