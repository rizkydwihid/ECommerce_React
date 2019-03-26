import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/loading.css';

class Start extends Component{
    render() {
        return(
            <div>
               <div id="loader"></div>
               <div class="logo-fz">

               </div>
               <div style={{display:"none"}} id="myDiv" className="animate-bottom">
                  <img style={{alignContent:"middle"}} src={require('../assets/img/lg-n.png')} alt=""/><br/>
                  <h3 style={{fontSize:"18px",fontWeight:"800"}}>Selamat Datang..</h3>
                  <p style={{fontSize:"16px"}}>Happy shopping.</p><br/>
                  <div className="wrapper">
                  <Link to="/login" className="nav-link button">Start</Link>
                  </div>
               </div>
            </div>
            
        )
    }
}
export default Start;