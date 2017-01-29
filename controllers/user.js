var bcrypt = require('bcrypt-nodejs');
var User = require('../models/User');

exports.postSignUp = function(req, res, next) {
    
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });

    User.findOne({email: req.body.email }, (err, existingUser) => {
        if (err) {
            console.log(err);
            return next(err);
        }
        if (existingUser) {
            return res.json({ msg: "That email already exists!"});
        }
        else {
            user.save((err) => {
                if (err) {
                    console.log("err");
                }
                return res.json({ msg: "You have successfully signed up!"});
            })
        }
    });

    // // GENERATE SALT
    // var salt = null;
    // bcrypt.genSalt(20, function(err, result){
    //     if (err) {
    //         // Error generating salt
    //         console.log(err);
    //     } else {
    //         // Successfully generated salt
    //         salt = result;
    //     }
    // })

    // // HASH PASSWORD
    // bcrypt.hash(user.password, salt, null, function(err, hash){
        
    //     if (!err) {
    //         // Successfully hashed password
    //         console.log(hash)
    //     } else {
    //         // Error Hashing password
    //         console.log(err);

    //     }
    // })
    

}