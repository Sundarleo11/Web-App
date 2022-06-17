const post=require('../model/Post');

module.exports.create=function(req,res){
    post.create({
        content:req.body.content,
        user: req.user._id
    },function(err,post){
        if(err){
            console.log("while createing post getting error"); return;
        }
        return res.redirect('back');
    });
}