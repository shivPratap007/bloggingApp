const mongoose=require('mongoose');

const commentsSchema=new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    blogId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"blog",
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    }
},{timestamps:true})



const commentModel=mongoose.model('comments',commentsSchema);

module.exports={
    commentModel,
};