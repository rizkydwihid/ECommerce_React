import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <section>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg navbar-light bg-white">
                    <img src={require('../assets/img/lg.png')} style={{width:"50px", height:"50px"}} alt=""/>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto topnav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard" style={{color:"#287a6a"}} ><i class="fas fa-columns" style={{color:"#e1a70a"}}></i> Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home" style={{color:"#287a6a"}} ><i class="fas fa-h-square" style={{color:"#e1a70a"}}></i> Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/produk" style={{color:"#287a6a"}} ><i class="fab fa-product-hunt" style={{color:"#e1a70a"}}></i> Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/bantuan" style={{color:"#287a6a"}} ><i class="fas fa-info-circle" style={{color:"#e1a70a"}}></i> Info</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/keranjang" style={{color:"#287a6a"}}><i class="fas fa-shopping-cart"  style={{color:"#e1a70a"}}></i> Cart</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login" onClick={() => this.props.postLogout()} style={{color:"#287a6a"}}><i class="fas fa-sign-out-alt" style={{color:"#e1a70a"}}></i> Log Out</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <hr/>
        </section>
        );
    }
}
export default Navbar;