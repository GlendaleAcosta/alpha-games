// import { combineReducers } from "redux"

// import tweets from "./tweetsReducer"
// import user from "./userReducer"

// export default combineReducers({
//   tweets,
//   user,
// })


var {combineReducers} = require('redux');
var user = require('./userReducer');

module.exports =  combineReducers({
    user
});


