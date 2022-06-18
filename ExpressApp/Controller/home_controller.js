const Post=require('../model/Post');


module.exports.home=function(req,res){
    // console.log(req.cookies);
   //  res.cookie('user_id',25);
   /*  return res.render('home',{
         title:'Home'
     })*/
/*
Post.find({},function(err,posts){

    return res.render('home',{
        title:'Home',
        posts:posts
    })
})*/

// populate the user of each post
Post.find({ }).populate("user").exec(function(err, posts){

    return res.render('home',{
        title:'Home',
        posts:posts
    });
})

}