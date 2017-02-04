var React = require('react');
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    
    return {
        user: state.user
    };
}

class UserList extends React.Component{

    render() {
        var {user} = this.props;
        return (
            <ul>
                <li>{user.first} {user.last}</li>
            </ul>
        );
    }
}


// function matchDispatchToProps(dispatch){
//     return bindActionCreators({selectUser: selectUser}, dispatch);
// }

module.exports = connect(mapStateToProps)(UserList);
