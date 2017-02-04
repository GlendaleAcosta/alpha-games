var bcrypt = require('bcrypt-nodejs');
var mongoose = require('mongoose');

// User Schema
var userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  username: String,
  password: String,
  profile_pic: String
  
}, { timestamps: true });


// Password Hash Middleware
userSchema.pre('save', function save(next){
    var user = this;
    
    bcrypt.genSalt(10, (err, salt) => {

        if (err){ return next(err);}
        
        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err){ return next(err);}
            user.password = hash;
            next();
        })
    })
});




var User = mongoose.model('User', userSchema);

module.exports = User;