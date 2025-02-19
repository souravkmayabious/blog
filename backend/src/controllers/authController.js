const register = async (req, res) => {
    try{
        const { username, email, password } = req.body;
        res.status(200).json({message:"user inserted" , username, email, password});
    }catch(error){
        res.status(500).json({message: error.message});
    }

}


module.exports = { register };