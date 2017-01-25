var React = require('react');
var HomeHeader = require('HomeHeader');
var GameGrid = require('GameGrid');
var Footer = require('Footer');

var Home = (props) => {
    return (
        <div>
            <HomeHeader/>
            <GameGrid/>
            <Footer/>
        </div>
    );
}

module.exports = Home;
