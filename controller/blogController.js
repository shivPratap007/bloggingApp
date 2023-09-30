const {blogModel}=require('../model/Blog')


const createBlog= async (req,res)=>{
    res.render("addBlog",{
        name:req.customdata.name.name,
    });
};

const postCreateBlog = async (req,res)=>{
    console.log("Working data",req.body);
    // console.log(req.file);
    console.log(req.customdata);
    const {body,title,coverImage}=req.body;
    const createdBlog=await blogModel.create({
        body,
        title,
        createdBy:req.customdata.name._id,
        coverImage
    });
    console.log(createdBlog);
    res.redirect('/');
}



module.exports={
    createBlog,
    postCreateBlog,
}