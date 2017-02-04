var reducer = require('../reducers');
var { createStore, applyMiddleware } = require('redux');
var thunk = require('redux-thunk').default;

var middleware = applyMiddleware(thunk);

module.exports = createStore(reducer, middleware);
