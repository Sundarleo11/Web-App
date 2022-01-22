
module.exports.profile=function(req,res){
    return res.render('profile',{
        title:'Your Profile'
    })
}


module.exports.signin=function(req,res){
    return res.render('user_sign_in',{
        title:'sign-in'
    })
}

module.exports.signup=function(req,res){
    return res.render('user_sign_up',{
        title:'sign-up'
    })
}


module.exports.create=function(req,res){
    
    //ToDo later
}


module.exports.createSession=function(req,res){
    
    //ToDo later
}