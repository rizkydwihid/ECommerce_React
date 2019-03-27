import React, {Component} from 'react';
import Navbar from '../componen/Navbar';
// import {Link} from 'react-router-dom';
import IsiKeranjang from '../componen/IsiKeranjang';
import Footer from '../componen/Footer';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { connect } from 'unistore/react';
import { actions } from '../store';

class Keranjang extends Component{
    constructor (props){
        super(props);
        this.state = {
            listCart: []
        };
    };
    componentDidMount = async () => {
        console.log("token", this.props.token)
        const self = this;
        const URL = "http://localhost:8010/proxy/cart";
        
        console.log("ini token",this.props.token)
        await axios
        .get(URL, {
            headers: {
              "Authorization": "Bearer " + this.props.token
            }})
        .then(function(response){
            // console.log("rensponse data", response.data.cart)
            self.setState({listCart: response.data.cart})
        })
        .catch(function(error){
            // console.log("failed get data product", error);
        });
        
    }
    render(){
        console.log("list cart", this.listCart)
        return(
            <div>
                <Navbar/>
                <div class="page-header"></div>
                <div class="cart-container">
                    {this.state.listCart.map((item, key) => {
                        const imeg = item.gambar !== null ? item.gambar: "";
                        const namabarang= item.nama_barang !== null ? item.nama_barang: "";
                        const totqty = item.qty !== null ? item.qty: "";
                        const totbayar= item.total_byr !== null ? item.total_byr: "";
                        const status= item.status !== null ? item.status: "";
                        
                        return <IsiKeranjang key={key} imeg={imeg} namabarang={namabarang} totqty={totqty} totbayar={totbayar} status={status}/>; 
                    })}
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}
export default connect(
    "is_login, username, password, token", actions)(withRouter(Keranjang));