const express = require('express');
const router = express.Router();
const passport = require('passport');

const commentsControler = require('../Controller/Commenets_controller');

router.post('/create', passport.checkAuthentication, commentsControler.create);

module.exports = router;