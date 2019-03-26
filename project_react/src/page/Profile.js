import React, {Component} from 'react';
import Navbar from '../componen/Navbar';
import Footer from '../componen/Footer';
import '../assets/css/profile.css';
// import {Link} from 'react-router-dom';

class Profile extends Component {
    render(){
        return(
            <div>
                <Navbar/>
                <div> 
                <div class="page-header"></div>
                    <div class="profile-container">
                      <div class="row">
                      <div class="col-md-4">
                        <img src={require('../assets/img/lg.png')} class="img-responsive" width="100" height="100" />
                      </div>
                      <div class="col-md-8 profile-info">
                        <h4 class="user-name-prof">Rizky Dwi Hidayat</h4>
                        <h5 class="user-id">Admin</h5>
                      </div>
                    </div>
                      <br/><br/>
                      <div class="row more-info">
                      <div class="col-md-6">
                        <h5><b>Email</b></h5>
                        <h5 class="user-mail"><i>rizky@gmail.com</i></h5>
                      </div>
                        <div class="col-md-6">
                          <h5><b>Password</b></h5>
                          <h5 class="user-mail"><i>xxxxxxxx</i></h5>
                      </div>
                      </div>
                       <div class="row more-info">
                        <div class="col-md-6">
                          <h5><b>Phone Number</b></h5>
                          <h5 class="user-mail"><i>0895411114371</i></h5>
                      </div>
                      </div>
                      <br/>
                      
                    </div>
                    </div><br/>
                <Footer/>
            </div>
        
        )
    }

}
export default Profile;