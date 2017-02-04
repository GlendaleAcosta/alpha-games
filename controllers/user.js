var bcrypt = require('bcrypt-nodejs');
var User = require('../models/User');
var jwt = require('jsonwebtoken');

exports.postSignUp = function(req, res, next) {
    console.log(req.body);
    var user = new User({
        email: req.body.email,
        username: req.body.username,
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




exports.postLogin = function(req, res, next){
    
    var user = new User({
        email: req.body.email,
        password: req.body.password
    });
    
    User.findOne({email: user.email }, (err, existingUser) => {
        if (err) { return next(err); } 
        
        if (existingUser) {
            
            bcrypt.compare(user.password, existingUser.password, function(err, correctPW){
                if (err) { return next(err); } 
                if (correctPW){
                    var token = jwt.sign({ 
                        id: existingUser._id,   
                        username: existingUser.username,
                        }, 'jwtTokenSecret');
                        
                    return res.json({
                        msg: "You have successfully logged in!",
                        token: token
                    });
                } else {
                    return res.json({
                        msg: "Incorrect email or password."
                    });
                }
            })

        } else {
            // Error: User doesn't exist
            return res.json({
                msg: "Incorrect email or password."
            })
        }
    });
}