const router=require('express').Router();
const Controller=require('../Controller/user_controller');

router.get('/sign_in',Controller.signin);
router.get('/sign_up',Controller.signup);

router.get('/profile',Controller.profile);

router.post('/create',Controller.create);
router.post('/createSession',Controller.createSession);

module.exports=router;