var React = require('react');
var SignUp = require('SignUp');

class SignUpModal extends React.Component{

    constructor(props){
        super(props);
        this.closeSignUp = this.closeSignUp.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }

    closeSignUp() {
        this.props.onCloseSignUp();
    }
    onSignUp() {
        
        var user = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }
        
        SignUp.testSuperagent(user);
        this.refs.email.value = "";
        this.refs.password.value = "";
    }

    render(){
        return (
            <div className="modal-fade">
                <div className="login-modal card col-md-4">
                    <div onClick={this.closeSignUp} className="modal-x"></div>
                    <div className="card-block">
                        <h2>Sign Up</h2>     
                    </div>
                    <form onSubmit={this.onSignUp}>
                        <div className="card-block">
                            <div className="form-group">
                                <label>Email:</label>
                                <input ref="email" className="form-control" type="text" placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <label>Password:</label>
                                <input ref="password" className="form-control" type="password" placeholder="Enter password" />
                            </div>
                        </div>
                        <div className="card-block">
                            <button type="submit" className="btn form-control btn-primary">Sign Up</button>   
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

module.exports = SignUpModal;