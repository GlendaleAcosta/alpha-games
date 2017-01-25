var React = require('react');

class SignUpModal extends React.Component{

    constructor(props){
        super(props);
        this.closeSignUp = this.closeSignUp.bind(this);
    }

    closeSignUp() {
        this.props.onCloseSignUp();
    }

    render(){
        return (
            <div className="modal-fade">
                <div className="login-modal card col-md-4">
                    <div className="card-block">
                        <h1 className="lead">Sign Up Modal</h1>     
                    </div>
                    <div className="card-block">
                        <button onClick={this.closeSignUp} type="button" className="btn form-control btn-primary">Close</button>   
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = SignUpModal;