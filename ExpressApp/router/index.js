const router=require('express').Router();
const Controller=require('../Controller/home_controller');

console.log("Router");


router.get('/',Controller.home);
router.use('/user',require('./user'));

module.exports=router;