import React, {Component} from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import '../assets/css/loginadmin.css';
import { Link } from 'react-router-dom';


class LoginAdmin extends Component{
    doLoginAdmin = () => {
      this.props.postLoginAdmin().then(()=> {
        console.log("this",this);
        this.props.history.replace("/dashboardadmin");
      });
    };

    render(){
        return(
            <div>
              <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-6 col-sm-12">
                  {/* form login */}
                  <div class="wrapper-2">
                    <form class="form-admin" onSubmit={event => event.preventDefault()}>       
                      <h2 class="form-admin-heading">Admin login</h2>
                      <smal>Username: </smal><br/>
                      <input type="text" class="form-control" name="username" placeholder="Username" required="" onChange={a => this.props.setField(a)} />
                      <br/>
                      <smal>Password: </smal><br/>
                      <input type="password" class="form-control" name="password" placeholder="Password" required="" onChange={a => this.props.setField(a)}/>      
                      <button class="btnlogin2 btn-lg btn-primary btn-block " type="submit" onClick={() => this.doLoginAdmin()} >Login</button><br/>
                      <span>Login as </span><Link to="/login" style={{fontWeight:"900", textDecoration:"none",color:"#e1a70a"}}> Customer? </Link>
                    </form>
                  </div>
                  </div>
                </div>
              </div>
            </div>
                
        )
    }
}
export default connect(
  "is_login, username, password", actions)(withRouter(LoginAdmin));
