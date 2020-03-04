import React from 'react';
import { connect } from 'react-redux';
import { loginUser } from '../../Redux/actions/authActions'



class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (user) => dispatch(loginUser(user)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Login)