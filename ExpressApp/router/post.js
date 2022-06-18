const express=require('express');
const router=express.Router();
const passport=require('passport');

const postControler=require('../Controller/post_controller');

router.post('/create',passport.checkAuthentication,postControler.create);

module.exports=router;