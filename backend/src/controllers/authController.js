const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const  User  = require("../models/userModel");

const register = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are required", success: false});
        }
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
        return res.status(400).json({ message: "Email already exists", success: false });
        }
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const account_id = uuidv4();
        const user = await User.create({
            username,
            account_id,
            email,
            password : hash,
          });
        res.status(200).json({message:"user inserted", data: user, success: true});
    }catch(error){
        res.status(500).json({message: error.message, success: false});
    }

}


module.exports = { register };