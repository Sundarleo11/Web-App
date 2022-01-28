const passport=require('passport');
const passport_local=require('passport-local').Strategy;

const User=require('../model/User');


// authentication using passport
passport.use(new passport_local({
    usernameField: 'email'
},
function(email, password, done){
    // find a user and establish the identity
    User.findOne({email: email}, function(err, user)  {
        if (err){
            console.log('Error in finding user --> Passport');
            return done(err);
        }

        if (!user || user.password != password){
            console.log('Invalid Username/Password');
            return done(null, false);
        }

        return done(null, user);
    });
}


));



//serializer the user kept to store the cookies
passport.serializeUser(function(user,done){

    return done(null,user.id);
})

//deserializer the user from key in cookie(encrt the id and to check server in id)
passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user){
      if(err){
        console.log('error in finding the user--passport');
        return done(err);
      }
      return done(null,user);
  });
  
});


//passport checkAuthentication
passport.checkAuthentication=function(req,res,next){
   //if user signed req passing through in controller action.
    if(req.isAuthenticated()){
     return next();
    }
    //not signed
    return res.redirect('/user/sign_in');
}

passport.setAuthenticatedUser=function(req,res,next){

    //req user current signed user information save it cookie then rendering the local views
    if(req.isAuthenticated()){
        res.locals.user=req.user;
    }
    next();
}

module.exports=passport;