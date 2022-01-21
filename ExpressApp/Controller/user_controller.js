
module.exports.profile=function(req,res){
    return res.end('<h1>user profile</h1>');
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