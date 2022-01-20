const router=require('express').Router();
const Controller=require('../Controller/home_controller');

console.log("Router");


router.get('/',Controller.home);

module.exports=router;