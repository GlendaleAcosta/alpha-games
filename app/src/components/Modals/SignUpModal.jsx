var React = require('react');
var SignUp = require('SignUp');

class SignUpModal extends React.Component{

    constructor(props){
        super(props);
        this.closeSignUp = this.closeSignUp.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
        this.state = {
            msg: null
        }
        
    }

    closeSignUp() {
        this.props.onCloseSignUp();
    }
    onSignUp(e) {
        e.preventDefault();
        
        var that = this;
        var user = {
            email: this.refs.email.value,
            username: this.refs.username.value,
            password: this.refs.password.value
        }
 
        SignUp.postSignUp(user)       
            .then(function(res){
                
                that.refs.email.value = "";     // Clear Email Input
                that.refs.password.value = "";  // Clear Password Input
                that.refs.username.value = "";
                that.setState({
                    msg: res.body.msg
                })
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
                    <div onClick={this.closeSignUp} className="modal-x"></div>
                    <div className="card-block p-btm-0">
                        <h2>Sign Up</h2>   
                    </div>
                    <form onSubmit={this.onSignUp}>
                        <div className="card-block p-btm-0">
                            {renderErrorMsg()}
                            <div className="form-group">
                                <label>Email:</label>
                                <input ref="email" className="form-control" type="text" placeholder="Enter Email" />
                            </div>
                            <div className="form-group">
                                <label>Username:</label>
                                <input ref="username" className="form-control" type="text" placeholder="Enter Username" />
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