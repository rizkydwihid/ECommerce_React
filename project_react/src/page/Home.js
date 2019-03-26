import React, {Component} from 'react';
import Navbar from '../componen/Navbar';
import Slide from '../componen/Slide';
// import {Link} from 'react-router-dom';
import IsiHome from '../componen/IsiHome';
import Footer from '../componen/Footer';
// import {connect} from 'unistore/react';
// import {withRouter} from 'react-router-dom';
// import {actions} from '../store';
import axios from 'axios';

// const imgNOL = 0;

class Home extends Component {
    constructor (props){
        super(props);
        this.state = {
            listProduk: []
        };
    };
    componentDidMount = async () => {
        // this.props.getURLProduk()
        const self = this;
        // console.log("test get produk")
        await axios
        .get("http://0.0.0.0:5000/produk")
        .then(function(response){
            // console.log("rensponse data", response.data.produk)
            self.setState({listProduk: response.data.produk})
        })
        .catch(function(error){
            // console.log("failed get data product", error);
        });
    //     console.log("local state product", this.state.listProduk)
    }

    render(){
        // const {listProduk} = this.state;
        // console.log("Test isi listproduk", this.state.listProduk)
        return(
            <div>
                <Navbar/>
                <div>
                <Slide/>
                </div>
                {/* <IsiHome/> */}
                <div>
                    <div class="card-section">
                    {this.state.listProduk.map((item, key) => {
                        // console.log("gambar", item.gambar)
                        const imeg = item.gambar !== null ? item.gambar: "";
                        const productname= item.nama_produk !== null ? item.nama_produk: "";
                        const warna = item.warna !== null ? item.warna: "";
                        const hargadistri= item.harga_distri !== null ? item.harga_distri: "";
                        const hargabandrol= item.harga_bandrol !== null ? item.harga_bandrol: "";
                        const id = item.produk_id !== null ? item.produk_id : 0;
                        return <IsiHome key={key} imeg={imeg} productname={productname} warna={warna} hargadistri={hargadistri} hargabandrol={hargabandrol} id={id}/>; 
                    })}
                </div>
                </div>
                <br/>
                <Footer/>
            </div>
        );
    }
}
export default Home;
// connect("listProduk", actions)(withRouter(Home));