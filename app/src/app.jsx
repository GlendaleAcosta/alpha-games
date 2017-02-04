var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, browserHistory } = require('react-router');
var Main = require('Main');
var Home = require('Home');
var { Provider } = require('react-redux');
var store = require('./store/store');
var ProfilePage= require('ProfilePage');
var request = require('superagent');
require("!style-loader!css-loader!sass-loader!./stylesheets/main.scss");

var authenticate = function(){
    var token = window.localStorage.getItem('AG-JWT') || null;
    if(token){                         
        console.log("logged in");
        // send token to server to authenticate
        request
            .post('/authenticate')
            .send({token: token})
            .set('Accept', 'application/json')
            .end(function(err, res){
                if(err){
                    console.log(err)
                } else {
                    console.log(res);
                    if(res.body.msg === 'invalid jwt'){
                        console.log("the jwt is invalid. redirect to 404. and tell user to clear cookies");
                    } 
                }
            });

//  function(user){
        
//         return request
//             .post('/login')
//             .send(user)
//             .set('Accept', 'application/json');
//     }

            // Then check if user in store is set 
                // if user is set 
                    // then cool
                // if user is not set 
                    // then set it
    } else {
        console.log("not logged in");
    }
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} onEnter={authenticate}/>
                <Route path="profile/:userId" component={ProfilePage} onEnter={authenticate}/>
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('app')
);