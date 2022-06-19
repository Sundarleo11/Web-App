const router = require('express').Router();
const Controller = require('../Controller/user_controller');
const passport = require('passport');

router.get('/sign_in', Controller.signin);
router.get('/sign_up', Controller.signup);

router.get('/profile', passport.checkAuthentication, Controller.profile);

router.post('/create', Controller.create);

// use passport as a middleware to authenticate
router.post('/create_session', passport.authenticate(
  'local',
  { failureRedirect: '/user/sign_in' },
), Controller.createSession);
router.get('/signout', Controller.destorySession);
module.exports = router;
