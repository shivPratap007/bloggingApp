// Middleware for accessing the apps 
const { verifyToken}=require('../services/Authentication');
const models=require('../model/User');


const checkToken=async (req,res,next)=>{
    const token=req.cookies;
    if(Object.keys(token).length==0) return res.redirect('/user/signin');
    const val=verifyToken(token.userid);
    const tokenEmail=val.email;
    console.log(tokenEmail)
    const dataFromDB=await models.User.findOne({email:tokenEmail});
    console.log(dataFromDB);
    if(!dataFromDB){
        return res.redirect('/user/signin');
    }
    req.customdata={name:dataFromDB.name};
    console.log("This is the data",req.customdata) ;
    next();

}

module.exports={
    checkToken
}