var bcrypt = require('bcrypt-nodejs');
var User = require('../models/User');

exports.postSignUp = function(req, res, next) {
    
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({email: req.body.email }, (err, existingUser) => {
        if (err) { return next(err); } 

        if (existingUser) {
            return res.json({ msg: "That email already exists!"});
        }
        user.save((err) => {
            if (err) { return next(err); }
            return res.json({ 
                msg: "You have successfully signed up!",
                success: true
            });
        })
        
    });
    

}