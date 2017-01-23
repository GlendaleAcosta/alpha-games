var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, browserHistory } = require('react-router');
var Main = require('Main');
var Home = require('Home');


require("!style-loader!css-loader!sass-loader!./stylesheets/main.scss");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
        </Route>
    </Router>, 
    document.getElementById('app')
);