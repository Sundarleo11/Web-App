const User=require('../model/User');

module.exports.profile=function(req,res){
    return res.render('profile',{
        title:'Your Profile'
    })
}


module.exports.signin=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile')
    }
    return res.render('user_sign_in',{
        title:'sign-in'
    })
}

module.exports.signup=function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/user/profile')
    }
    return res.render('user_sign_up',{
        title:'sign-up'
    })
}




module.exports.create=function(req,res){
  
    if (req.body.password != req.body.confirm_password){
        console.log('blocker');
        return res.redirect('back');
    }
//User is model function & user is passing parameter
    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding user in signing up'); return}

        if (!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating user while signing up'); return}

                return res.redirect('/user/sign_in');
            })
        }else{
            return res.redirect('back');
        }

    });
}



module.exports.createSession=function(req,res){
    
    //ToDo later
    return res.redirect('/');
}