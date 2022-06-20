const User = require('../model/User');

module.exports.profile = function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) { console.log("to get the deatils profile on error"); return; }

        return res.render('profile', {
            title: 'Your Profile',
            profile_user: user
        });
    });

}


module.exports.signin = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/user/profile')
    }
    return res.render('user_sign_in', {
        title: 'sign-in'
    })
}

module.exports.signup = function (req, res) {
    if (req.isAuthenticated()) {
        return res.redirect('/user/profile')
    }
    return res.render('user_sign_up', {
        title: 'sign-up'
    })
}




module.exports.create = function (req, res) {

    if (req.body.password != req.body.confirm_password) {
        console.log('blocker');
        return res.redirect('back');
    }



    //User is model function & user is passing parameter
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { console.log('error in finding user in signing up'); return }

        if (!user) {
            User.create(req.body, function (err, user) {
                if (err) { console.log('error in creating user while signing up'); return }

                return res.redirect('/user/sign_in');
            })
        } else {
            return res.redirect('back');
        }

    });
}

module.exports.update = function (req, res) {
    if (req.user.id == req.params.id) {
        User.findByIdAndUpdate(req.params.id, req.body, function (err, user) {
            return res.redirect('back');
        })
    } else {
        return res.status(401).send('Unauthourized');
    }
}


module.exports.createSession = function (req, res) {

    //ToDo later
    return res.redirect('/');
}

module.exports.destorySession = function (req, res) {
    req.logout();

    return res.redirect('/');
}