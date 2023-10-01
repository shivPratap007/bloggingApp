const express=require('express');
// const multer=require('multer');
const blogController=require('../controller/blogController');
const {checkToken}=require('../middleware/authentication')
const {viewBlog}=require('../controller/viewBlogController')
const {commentController}=require('../controller/commentController')


const router=express.Router();


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, './uploads')
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() 
//       cb(null, `${uniqueSuffix}-${file.originalname}`)
//     }
//   })
  
//   const upload = multer({ storage: storage })



router.get('/addBlog', checkToken, blogController.createBlog)

router.post('/', checkToken,blogController.postCreateBlog);

router.get('/:id',checkToken,viewBlog);

router.post('/comment/:blogId',checkToken,commentController);




module.exports=router;