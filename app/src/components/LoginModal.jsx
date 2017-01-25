var React = require('react');

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
                    <div className="card-block">
                        <h1 className="lead">Login Modal</h1>     
                    </div>
                    <div className="card-block">
                        <button onClick={this.closeLogin} type="button" className="btn form-control btn-primary">Close</button>   
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = LoginModal;