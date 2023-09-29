const express=require('express');
const ejs=require('ejs');
const mongoose=require('mongoose');
const {checkToken}=require('./middleware/authentication')

const userRouter=require('./routes/User');
const cookieParser = require('cookie-parser');

const app=express();


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.set('view engine','ejs');
app.set('views',__dirname+'/views');

app.use('/user',userRouter);



app.get('/', checkToken, (req,res)=>{
    return res.render('home',{
        name:req.customdata,
    });
})



app.listen(5000,()=>{
    console.log("Server is listening on port no. 5000");
    console.log()
})

mongoose.connect('mongodb://127.0.0.1:27017/Bloggify')
.then(()=>{
    console.log("mongodb connected");
})
.catch(error=>{console.log(error)});