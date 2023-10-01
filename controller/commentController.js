const {commentModel}=require('../model/Comments');


const commentController=async (req,res)=>{
    // console.log(req.body);
    // console.log(req.params);
    // console.log(req.customdata.name._id);
    const comment=await commentModel.create({
        content:req.body.content,
        blogId:req.params.blogId,
        createdBy:req.customdata.name._id,
    })
    console.log(comment);

    // res.redirect(`/blogs/${req.params.blogId}`);
    res.redirect('/')
};


module.exports={
    commentController,
}