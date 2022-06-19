const express = require('express')
const router = express.Router();
const Controller = require('../Controller/home_controller');

console.log("Router");


router.get('/', Controller.home);
router.use('/user', require('./user'));
router.use('/post', require('./post'));
router.use('/comments', require('./comments'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;