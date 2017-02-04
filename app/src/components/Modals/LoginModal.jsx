var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var Login = require('Login');
var {connect} = require('react-redux');
var UserActions = require('../../actions/userActions');


class LoginModal extends React.Component{

    constructor(props){
        super(props);
        this.closeLogin = this.closeLogin.bind(this);   
        this.onLogin = this.onLogin.bind(this);
        this.state = { msg: null};
    }

    closeLogin() {
        this.props.onCloseLogin();
    }

    onLogin(e){
        e.preventDefault();
        
        var that = this;
        var user = {
            email: this.refs.email.value,
            password: this.refs.password.value
        }

        Login.postLogin(user)
            .then(function(res){
                
                
                that.refs.email.value = "";                 
                that.refs.password.value = "";

                that.setState({
                    msg: res.body.msg
                });
                
                var token = res.body.token || null;
                if(token){                                      
                    localStorage.setItem("AG-JWT", token);             
                }
                
                
            })
            .catch(function(err){ 
                
                console.log(err);
            })
    }

    render(){
        var {msg} = this.state;
        function renderErrorMsg() {
            if(typeof msg === 'string') {
                return <p className="text-danger small">* {msg}</p>
            }
        }

        return (
            
            <div className="modal-fade">
                <div className="login-modal card col-md-4">
                    <div onClick={this.closeLogin} className="modal-x"></div>
                    <div className="card-block p-btm-0">
                        <h2>Login</h2>     
                    </div>
                    <form onSubmit={this.onLogin}>
                        <div className="card-block">
                            {renderErrorMsg()}
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
                            <button type="submit" className="btn form-control btn-primary">Login</button>   
                        </div>
                    </form>
                </div> 
            </div>
        );
    }
}

module.exports = LoginModal;