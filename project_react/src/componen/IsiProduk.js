import React, {Component} from 'react';
import '../assets/css/isiproduk.css';
import {Link} from 'react-router-dom';
// import { withRouter } from "react-router-dom";
// import { connect } from 'unistore/react';
// import { actions } from '../store';


// detailSepatu={this.sepatu} detailJersey={this.jersey} detailAksesoris={this.aksesoris}
class IsiProduk extends Component{
    
    render(){
        return(
            <div>
                <div class="page-header"></div>
                <div class="produk-container">
                <div class="card-section">
                    <div class="card-container">
                       <div class="card-image">
                          <Link to="/sepatu"><img src={require('../assets/img/metasala-combat.png')} class="imgcard" alt="Avatar" /></Link>
                       </div><br/>
                       <div class="card-content">
                          <h3><b>SEPATU</b></h3>
                       </div><br/>
                </div>
            
                <div class="card-container">
                    <div class="card-image">
                    <Link to="/produk/jersey"><img src={require('../assets/img/nike.jpg')} class="imgcard" alt="Avatar"/></Link>
                    </div><br/>
                       <div class="card-content">
                       <h3><b>JERSEY/ KAOS</b></h3>
                    </div><br/>
                </div>
            
                <div class="card-container">
                    <div class="card-image">
                    <Link to="/produk/aksesoris"><img src={require('../assets/img/property.jpg')} class="imgcard" alt="Avatar" /></Link>
                    </div><br/>
                    <div class="card-content">
                       <h3><b>AKSESORIS</b></h3>
                    </div><br/>
                </div>
                </div>
                </div><br/>
            </div>
        )
    }
}
export default IsiProduk;