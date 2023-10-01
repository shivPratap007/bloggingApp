// Middleware for accessing the apps 
const { verifyToken}=require('../services/Authentication');
const models=require('../model/User');


const checkToken=async (req,res,next)=>{
    const token=req.cookies;
    if(Object.keys(token).length==0) return res.redirect('/user/signin');
    const val=verifyToken(token.userid);
    const tokenEmail=val.email;
    const dataFromDB=await models.User.findOne({email:tokenEmail});
    if(!dataFromDB){
        return res.redirect('/user/signin');
    }

    req.customdata={name:dataFromDB};

    // console.log("middleware data",req.customdata);
    next();

}

module.exports={
    checkToken
}