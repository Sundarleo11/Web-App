const post = require('../model/Post');
const Comment = require('../model/comments');

module.exports.create = function (req, res) {
    post.create({
        content: req.body.content,
        user: req.user._id
    }, function (err, post) {
        if (err) {
            console.log("while createing post getting error"); return;
        }
        return res.redirect('back');
    });
}



module.exports.destroy = function (req, res) {
    post.findById(req.params.id, function (err, post) {
        // .id means converting the object id into string
        if (post.user == req.user.id) {
            post.remove();

            Comment.deleteMany({ post: req.params.id }, function (err) {
                return res.redirect('back');
            });
        } else {
            return res.redirect('back');
        }

    });
}
