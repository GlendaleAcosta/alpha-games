var React = require('react');
var { Link, Indexlink } = require('react-router');
var LoginModal = require('LoginModal');

class Nav extends React.Component{

    constructor(props) {
        super(props);        
        this.showLogin = this.showLogin.bind(this);
        this.closeLogin = this.closeLogin.bind(this);
        this.state = { showLogin: false};
    }
    
    showLogin(){    
        this.setState({ showLogin: true })
    }
    closeLogin(){
        this.setState({ showLogin: false })
    }
    

    render(){
        var that = this;
        var { showLogin } = this.state;

        function renderLogin(){
            
            if (showLogin === true) {
                return (
                    <LoginModal onCloseLogin={that.closeLogin}/>
                )
            }
        }

        return (   
            <div>
                <nav className="navbar fixed-top navbar-toggleable-md navbar-light bg-faded">
                    <div className="container">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">Navbar</a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                            </ul>
                    
                            <ul className="navbar-nav float-xs-right">
                                <li className="nav-item">
                                    <a onClick={this.showLogin} className="nav-link" href="#">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Sign-up</a>
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
                {renderLogin()}
            </div>
        );
    }
};

module.exports = Nav;
                        