import React, {Component} from 'react';
import Navbar from '../componen/Navbar';
// import {Link} from 'react-router-dom';
import IsiProduk from '../componen/IsiProduk';
import Footer from '../componen/Footer';


class Produk extends Component{
    
    render(){
        return(
            <div>
                <Navbar/>
                <IsiProduk />
                <Footer/>
            </div>
        )
    }
}
export default Produk;