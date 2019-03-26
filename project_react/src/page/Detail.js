import React, {Component} from 'react';
import Navbar from '../componen/Navbar';
// import {Link} from 'react-router-dom';
// import IsiHome from '../componen/IsiHome';
import Footer from '../componen/Footer';
// import IsiDetail from '../componen/IsiDetail';
// import {connect} from 'unistore/react';
// import {withRouter} from 'react-router-dom';
// import {actions} from '../store';
import axios from 'axios';

// const imgNOL = 0;

class Detail extends Component {
    constructor (props){
        super(props);
        this.state = {
            gambar: "https://i.postimg.cc/nCwqjQhv/apache-merah.png",
            nama_produk: "",
            warna: "",
            harga_distri: "",
            harga_bandrol: "",
            id: "",
            kategori: "",
            merk: "",
            size: "",
            stok: "",
            deskripsi: "",
            idproduk: "", 
            
        };
    };
    componentWillMount = () => {
        const idproduk = this.props.location.pathname.slice(8)
        const url = "http://0.0.0.0:5000/produk/" + idproduk
        // console.log("test url", url)
        const self = this;
        
        axios
        .get(url)
        .then(function(response) {
            // console.log("test url 2", response.data)
                self.setState({...response.data}, () => {
                console.log('test', self.state)
            })
        })
    }
 
    render() {
        return(
            <div>
                <Navbar/>
                {/* <IsiDetail/> */}
                <div>
                <div className="card-section">
                <div className="card-container">
                  <div className="detail-image">
                     <img src={this.state.gambar} className="imgcard" alt="Avatar" />
                  </div><br/>
                  <div className="detail-content">
                     <h5 style={{textAlign:"center"}}><b>{this.state.nama_produk}</b></h5>
                     </div><br/>
                  <div className="detail-footer" id="bottom-right">
                    <p> Kategori : <span style={{fontWeight:"600"}}>{this.state.kategori}</span></p>
                    <p> Merk : <span style={{fontWeight:"600"}}>{this.state.merk}</span></p>
                    <p> Stok : <span style={{fontWeight:"600"}}>{this.state.stok}</span></p>
                    <p> Warna : <span style={{fontWeight:"600"}}>{this.state.warna}</span></p>
                    <p> Ukuran : <span style={{fontWeight:"600"}}>{this.state.ukuran}</span></p>
                    <p> Deskripsi : <span style={{fontWeight:"600"}}>{this.state.deskripsi}</span></p>
                    <p> Harga Distributor : <s style={{color:"red",fontWeight:"500"}}>Rp {this.state.harga_distri}</s></p>
                    <p> Harga Bandrol : <span style={{fontWeight:"600"}}>Rp {this.state.harga_bandrol}</span></p>
                    <button className="btnlogin btn-lg btn-primary btn-block " ><i className="fas fa-cart-plus" ></i> Add to cart</button><br/><br/>
                     {/* <button class="btnlogin btn-lg btn-primary btn-block " ><i className="fas fa-info-circle"></i> Detail</button><br/> */}
                     {/* <Link to={link} class="btnlogin btn-lg btn-primary btn-block " ><i className="fas fa-info-circle"></i> Detail</Link><br/> */}
                  </div>
                </div>
                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Detail;