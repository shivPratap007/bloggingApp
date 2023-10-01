const {blogModel}=require('../model/Blog');
const {commentModel}=require('../model/Comments')


const viewBlog=async (req,res)=>{
    // console.log(req.params.id);
    const blog=await blogModel.findById(req.params.id).populate('createdBy');
    const comment=await commentModel.find({blogId:req.params.id}).populate('createdBy')
    // console.log(blog);
    console.log("Comments",comment);
    return res.render('blog',{
        name:req.customdata.name.name,
        blog:blog,
        comments:comment,
    })
}



module.exports={
    viewBlog,
}