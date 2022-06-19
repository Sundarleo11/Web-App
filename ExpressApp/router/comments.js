const express = require('express');
const router = express.Router();
const passport = require('passport');

const commentsControler = require('../Controller/Commenets_controller');

router.post('/create', passport.checkAuthentication, commentsControler.create);
//router.post('/destroy/:id', passport.checkAuthentication, commentsControler.destroy);
//router.get('/destroy', passport.checkAuthentication, commentsControler.destroy);
router.get('/destroy/:id', passport.checkAuthentication, commentsControler.destroy);

module.exports = router;