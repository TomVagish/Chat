const jwt = require('jsonwebtoken');


module.exports = (req,res,next) =>{

  try{
    const token = req.headers.authorization;
    jwt.verify(token ,'secret_t_v_angular-chat');
    next();
  } catch(error){
    res.status(401).json({ message:'Auth failed (token)!'});
  }

};
