import React, {Component} from 'react';
import Navbar from '../componen/Navbar';
// import {Link} from 'react-router-dom';
// import Slide from '../componen/Slide';
import Footer from '../componen/Footer';
import IsiBantuan from '../componen/IsiBantuan';

class Bantuan extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <IsiBantuan/>
                <Footer/>
            </div>
        )
    }
}
export default Bantuan;