const {Router}=require('express');

const controller=require('../controller/userController')

const router=Router();

router.get('/signin',controller.signin);

router.get('/signup',controller.signup);

router.post('/signup',controller.postSignup);

router.post('/signin',controller.postSignin);

module.exports=router;