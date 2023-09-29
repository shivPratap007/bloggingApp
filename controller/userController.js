const models=require('../model/User');
const {generateToken,verifyToken}=require('../services/Authentication')


const signup=async (req,res)=>{
    res.render('signup');
}


const signin=async (req,res)=>{
    res.render('signin');
}

const postSignup=async (req,res)=>{
    console.log("ye vala");
    console.log(req.body);
    const {name,password,email}=req.body;
    const user= await models.User.create({
        name,
        password,
        email,
    });
    return res.redirect('/');
}


const postSignin=async (req,res)=>{
    console.log(req.body);
    const {email,password}=req.body;
    const isMatched=await models.User.findOne({email});
    console.log(isMatched);
    if(!isMatched) return res.send("User not found");
    if(isMatched.password!==req.body.password) return res.send("Password is incorrect");
    const token=generateToken(isMatched);
    res.cookie("userid",token);
    console.log("Token",token);
    return res.redirect('/');
}


module.exports={
    signin,
    signup,
    postSignup,
    postSignin,
}