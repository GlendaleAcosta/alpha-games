var React = require('react');

var Footer = require('Footer');

var ProfilePage = (props) => {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4">Profile Page</h1>
            </div>
            <Footer/>
        </div>
    );
}

module.exports = ProfilePage;
