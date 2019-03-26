import React, {Component} from 'react';
// import axios from "axios";
// import { withRouter } from "react-router-dom";
import '../assets/css/register.css';
import { Link } from 'react-router-dom';

class Register extends Component{
    render(){
        return(
            <div>
                {/* form register */}
                <div class="form_wrapper">
                  <div class="form_container">
                    <div class="title_container">
                      <h2>Create New Account</h2>
                    </div>
                    <div class="row clearfix">
                      <div class="">
                        <form>
                            <div class="row clearfix">
                                <div class="col_half">
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                    <input type="text" name="name" placeholder="First Name" required />
                                    </div>
                                </div>
                                <div class="col_half">
                                    <div class="input_field"> <span><i aria-hidden="true" class="fa fa-user"></i></span>
                                    <input type="text" name="name" placeholder="Last Name" required />
                                    </div>
                                </div>
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-envelope"></i></span>
                            <input type="email" name="email" placeholder="Email" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                            <input type="password" name="password" placeholder="Password" required />
                            </div>
                            <div class="input_field"> <span><i aria-hidden="true" class="fa fa-lock"></i></span>
                            <input type="password" name="password" placeholder="Re-type Password" required />
                            </div>
                          
                            <input class="buttonreg" type="submit" value="Register" /><br/>
                            <span>Already account? <Link class="to-login" to="/login" style={{fontWeight:"600"}}>Log in</Link></span>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

            </div>
        )
    }
}
export default Register;