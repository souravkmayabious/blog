const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const  User  = require("../models/userModel");
const jwt = require('jsonwebtoken');

//Register____________________________________

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



//Login______________________

const login = async (req,res) =>{
    try{
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({message: "All fields are required", success: false});
        }

        //checking email is register or not
        const user = await User.findOne({ where: { email } });
        if (user) {
            //compair password if email is registered
            const compare = await bcrypt.compare(password, user.password);
            if(compare){
                //email & password is matched
                //create token
                const token = jwt.sign(
                    {id:user.account_id,username:user.username,role: user.role},
                    process.env.JWT_SECRET,
                    {expiresIn: process.env.JWT_EXPIRATION,}
                );
                // Generate Refresh Token
                const refreshToken = jwt.sign({ id: user.account_id, username: user.username,role: user.role }, 
                    process.env.JWT_SECRET, {
                    expiresIn: '7d',
                });

                return res.status(200).json({ message: "Login success", success: true, token, refreshToken});
            }else{
                return res.status(400).json({ message: "Wrong password", success: false});
            }            
        }else{
            return res.status(400).json({ message: "User not found", success: false });
        }
        
    }catch(error){
        res.status(500).json({message: error.message, success: false});
    }
}



module.exports = { register,login };