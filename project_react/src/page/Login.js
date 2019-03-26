import React, {Component} from 'react';
// import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import '../assets/css/login.css';
import { Link } from 'react-router-dom';


class Login extends Component{
    doLogin = () => {
      this.props.postLogin().then(()=> {
        console.log("this",this);
        this.props.history.replace("/dashboard");
      });
    };

    doRegister = () => {
      this.props.postRegis().then(() => {
        console.log("this", this);
        this.props.history.replace("/dashboard");
      });
    };
    render(){
        return(
            <div>
              <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    {/* form login */}
                    <div class="wrapper-1">
                    <form class="form-signin" onSubmit={event => event.preventDefault()}>       
                        <h2 class="form-signin-heading">Please login</h2>
                        <smal>Username: </smal><br/>
                        <input type="text" class="form-control" name="username" placeholder="Username" onChange={e => this.props.setField(e)} required/>
                        <br/>
                        <smal>Password: </smal><br/>
                        <input type="password" class="form-control" name="password" placeholder="Password" onChange={e => this.props.setField(e)} required/>      
                        {/* <button class="btnlogin btn-lg btn-primary btn-block " onClick={() => this.doLogin()} >Login</button><br/> */}
                        <input class="btnlogin2 btn-lg btn-primary btn-block " type="submit" value="Login" onClick={() => this.doLogin()} /><br/>
                        <span>Login as </span><Link to="/admin" style={{fontWeight:"900", textDecoration:"none",color:"#e1a70a"}}> Admin? </Link>
                    </form>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                
                  {/* form register */}
                <div class="form_wrapper">
                  <div class="form_container">
                    <div class="title_container">
                      <h2>Create New Account</h2>
                    </div>
                    <div class="row clearfix">
                      <div class="">
                        <form onSubmit={event => event.preventDefault()}>
                            <div class="row clearfix">
                                <div class="col_half">
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                    <input type="text" name="name" placeholder="Username" required onChange={e => this.props.setField(e)}/>
                                    </div>
                                </div>
                                <div class="col_half">
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                                    <input type="password" name="password" placeholder="Password" required onChange={e => this.props.setField(e)}/>
                                    </div>
                                </div>
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                            <input type="email" name="email" placeholder="Email" required onChange={e => this.props.setField(e)}/>
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fas fa-mobile-alt"></i></span>
                            <input type="tel" name="phone" placeholder="Phone Number" required onChange={e => this.props.setField(e)}/>
                            </div>          
                            <input class="buttonreg" type="submit" value="Register" onClick={() => this.doRegister()} /><br/>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
                </div>
              </div>
            </div>       
        )
    }
}
export default connect(
  "is_login, username, password", actions)(withRouter(Login));

// export default Login;