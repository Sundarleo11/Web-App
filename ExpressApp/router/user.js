const router=require('express').Router();
const Controller=require('../Controller/user_controller');



router.get('/profile',Controller.profile);

module.exports=router;