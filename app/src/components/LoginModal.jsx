var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class LoginModal extends React.Component{

    constructor(props){
        super(props);
        this.closeLogin = this.closeLogin.bind(this);   
    }

    closeLogin() {
        this.props.onCloseLogin();
    }

    render(){
        return (
            
            <div className="modal-fade">
         
                <div className="login-modal card col-md-4">
                    <div onClick={this.closeLogin} className="modal-x"></div>
                    <div className="card-block">
                        <h2>Login</h2>     
                    </div>
                    <div className="card-block">
                        <div className="form-group">
                            <label>Email:</label>
                            <input className="form-control" type="text" placeholder="Enter Email" />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input className="form-control" type="password" placeholder="Enter password" />
                        </div>
                    </div>
                    <div className="card-block">
                        <button type="button" className="btn form-control btn-primary">Login</button>   
                    </div>
                </div>
                
            </div>
        );
    }
}

module.exports = LoginModal;