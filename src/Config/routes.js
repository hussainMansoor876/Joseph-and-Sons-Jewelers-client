import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { Login } from '../Screens'


function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => isLoggedIn === true ? (
                <Component {...props} />
            ) : (<Redirect to={{ pathname: "/login", state: { from: props.location } }} />)
            }
        />
    );
}


class Routes extends Component {

    state = {
        user: null,
    }

    UNSAFE_componentWillMount() {
        const { user } = this.props
        if (user) {
            this.setState({ user: user })
        }
    }


    render() {
        const { user } = this.props;


        return (
            <Router>
                <Switch>
                    <Route path="/" exact component={Login} />
                </Switch>
            </Router>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.authReducer.user,
    }
}

export default connect(mapStateToProps, null)(Routes)

