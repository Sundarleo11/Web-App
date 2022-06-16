const express=require('express');
const router=express.Router();

const postControler=require('../Controller/post_controller');

router.post('/create',postControler.create);

module.exports=router;