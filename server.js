var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt-nodejs');
var session = require('express-session');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);

var PORT = process.env.PORT || 3030;
var app = express();


// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/alphagamestest1");
mongoose.connection.on('error', () => {
  console.log('MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});

// Controllers
var userCtrl = require('./controllers/user');

// Middleware
app.use(express.static('app/src'));
app.use(express.static('app/public'));
app.use(bodyParser.json());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: "SESSION_SECRET",
  store: new MongoStore({
    url: "mongodb://localhost:27017/alphagamestest1",
    autoReconnect: true
  })
}));
app.use(function(req, res, next){
  console.log("this is middleware being used");
  next();
});


// Routes
app.get('/*', function(req,res,next){
    res.sendFile(path.join(__dirname, 'app', 'public', 'index.html'));
});
app.post('/sign-up', userCtrl.postSignUp);
app.post('/login', userCtrl.postLogin);


// Server
app.listen( PORT , () => {
    console.log("App is up on port " + PORT);
});