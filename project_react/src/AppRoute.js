import React, {Component} from 'react';
import MainRoute from './MainRoute';
import {withRouter} from 'react-router-dom';

class AppRoute extends Component {

    postSignout = () => {
        localStorage.removeItem("is_login");
        this.props.history.push("/");
    };
    render() {
        return (
          <div>
            
            {/* <Navbar postSignout={this.postSignout}/> */}
            <MainRoute />
          </div>
        );
    }
}
export default withRouter(AppRoute);