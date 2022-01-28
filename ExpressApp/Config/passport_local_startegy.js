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

module.exports=passport;