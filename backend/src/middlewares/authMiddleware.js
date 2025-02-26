const jwt = require('jsonwebtoken');

function verifyToken(req,res,next) {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({success: false, message:'Access denied, No token available'});
    }
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.account_id = decoded.id;
        next();
    }catch(e){
        res.status(401).json({ success: false, message: 'Invalid token' });
    }
}

module.exports = verifyToken;