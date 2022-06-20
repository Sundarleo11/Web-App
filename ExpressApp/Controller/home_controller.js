const Post = require('../model/Post');
const User = require('../model/User');


module.exports.home = function (req, res) {
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
    Post.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        })
        .exec(function (err, posts) {
            User.find({}, function (err, users) {

                return res.render('home', {
                    title: "Home",
                    posts: posts,
                    all_user: users
                });

            });


        })

}