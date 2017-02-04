var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, browserHistory } = require('react-router');
var Main = require('Main');
var Home = require('Home');
var { Provider } = require('react-redux');
var store = require('./store/store');
var ProfilePage= require('ProfilePage');

require("!style-loader!css-loader!sass-loader!./stylesheets/main.scss");

var authenticate = function(){
    if(window.localStorage.getItem('AG-JWT')){                  // if jwt token exists        
        // console.log(window.localStorage.getItem('AG-JWT'));     // authenticate
        console.log("logged in");
    } else {
        console.log("not logged in");
    }
    
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={Main}>
                <IndexRoute component={Home} onEnter={authenticate}/>
                <Route path="profile/:id" component={ProfilePage} onEnter={authenticate}/>
            </Route>
        </Router>
    </Provider>, 
    document.getElementById('app')
);