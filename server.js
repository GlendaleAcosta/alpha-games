var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3030;
var app = express();


// Middleware
app.use(express.static('app/src'));
app.use(express.static('app/public'));
app.use(bodyParser.json());


// Routes
app.get('*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'app', 'public', 'index.html'));
});
app.post('/sign-up', function(req, res, next){

    var user = {
        email: req.body.email,
        password: req.body.password
    }

    res.json({
        user: user
    })
});



// Server
app.listen( PORT , () => {
    console.log("App is up on port " + PORT);
});