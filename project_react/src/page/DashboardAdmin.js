import React, {Component} from 'react';
import Navbar from '../componen/Navbar';
import Footer from '../componen/Footer';
import '../assets/css/profile.css';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';
import {Link} from 'react-router-dom';
import axios from 'axios';

class DashboardAdmin extends Component {
    constructor (props){
        super(props);
        this.state = {
        idproduk: ""
        }
    }
    // delProduct = () => {
    //     this.props.deleteProduct().then(()=> {
    //         console.log("addddd",this);
    //         this.props.history.replace("/home");
    //       });
    //     };
    
    componentDidMount= () => {
        // this.componentDidCatch.params.index
        const idproduk = this.props.location.pathname.slice(8)
        const url = "http://0.0.0.0:5000/produk/" + idproduk
        const self = this;
        axios.get(url)
        .then(function(response) {
            // console.log("test url 2", response.data)
                self.setState({...response.data}, () => {
                console.log('test', self.state)
            })
        })

    }
    
    render(){
      if (!this.props.is_login) {
        return <Redirect to={{pathname: "/login"}}/>;
      }
      else {
        return(
            <div>
                <Navbar/>
                <div> 
                <div class="page-header"></div>
                    <div class="profile-container">
                      <div class="row">
                      <div class="col-md-4">
                        <img src={require('../assets/img/lg.png')} class="img-responsive" style={{width:"100",height:"100"}} />
                      </div>
                      <div class="col-md-8 profile-info">
                        <h4 class="user-name-prof">{this.props.username}</h4>
                        <h5 class="user-id">{this.props.role}</h5>
                      </div>
                    </div>
                      <br/><br/>
                      <div class="row more-info">
                      <div class="col-md-6">
                        <h5><b>Email</b></h5>
                        <h5 class="user-mail"><i>{this.props.email}</i></h5>
                      </div>
                        <div class="col-md-6">
                          <h5><b>Password</b></h5>
                          <h5 class="user-mail">********</h5>
                      </div>
                      </div>
                       <div class="row more-info">
                        <div class="col-md-6">
                          <h5><b>Phone Number</b></h5>
                          <h5 class="user-mail"><i>{this.props.phone}</i></h5>
                      </div>
                      </div>
                      <br/>
                      <Link to="/listuser" style={{color:"#02564f",textDecoration:"none"}}><i class="fas fa-list-ul"></i> List User</Link> &nbsp;&nbsp; | &nbsp;&nbsp;
                      {/* <Link to="/home" style={{color:"red",textDecoration:"none"}} onClick={() => this.delProduct()}><i class="fas fa-list-ul"></i> Delete User</Link> &nbsp;&nbsp; | &nbsp;&nbsp; */}
                      <Link to="/add" style={{color:"#02564f",textDecoration:"none"}}><i class="fas fa-plus-circle"></i> Post Product</Link> &nbsp;&nbsp; | &nbsp;&nbsp;
                      
                    </div>
                    </div><br/>
                <Footer/>
            </div>
        )
    }
  }
}
export default connect(
  "is_login, username, password, email, phone, token", actions)(withRouter(DashboardAdmin));
