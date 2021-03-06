import React, {Component} from 'react';
import axios from 'axios';
import Navbar from '../componen/Navbar';
import Footer from '../componen/Footer';
import '../assets/css/isihome.css';
import {connect} from 'unistore/react';
import {withRouter} from 'react-router-dom';
import {actions} from '../store';
import {Link} from 'react-router-dom';

class Detail2 extends Component{
    constructor (props){
        super(props);
        this.state = {
            title: 'Judul',
            gambar: "",
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
            produk_id: "" 
        }
    }
    addCart = (e) => {
        this.props.postCart(e).then(()=> {
        //   console.log("this",this);
          this.props.history.replace("/keranjang");
        });
      };
     // link = link + this.props.id
    delProd = (e) => {
        this.props.deleteProduct(e).then(() => {
            this.props.history.replace("/home")
        })
    }
    
    componentDidMount= async () => {
        // this.componentDidCatch.params.index
        const idproduk = this.props.location.pathname.slice(8)
        const url = "http://0.0.0.0:5000/produk/" + idproduk
        const self = this;
        await axios.get(url)
        .then(function(response) {
            // console.log("test url 2", response.data)
                self.setState({...response.data}, () => {
                // console.log("test response", response)
                // console.log('test', self.state)
            })
                self.setState({ id: response.data.produk_id })
        })
    }
    render(){
        const editurl = "/edit/" + this.state.id
        return(
          
            <div>
                <Navbar/>
                <div>
                    <div class="card-section">
                        <div className="card-container">
                            <div className="card-image">
                                <img src={this.state.gambar} className="imgcard" alt="Avatar" />
                            </div><br/>
                            <div className="card-content">
                                <h5 style={{textAlign:"center"}}><b>{this.state.nama_produk}</b></h5>
                            </div><br/>
                            <div className="card-footer" id="bottom-right">
                                <p> Kategori : <span style={{fontWeight:"600"}}>{this.state.kategori}</span></p>
                                <p> Merk : <span style={{fontWeight:"600"}}>{this.state.merk}</span></p>
                                <p> Stok : <span style={{fontWeight:"600"}}>{this.state.stok}</span></p>
                                <p> Warna : <span style={{fontWeight:"600"}}>{this.state.warna}</span></p>
                                <p> Ukuran : <span style={{fontWeight:"600"}}>{this.state.ukuran}</span></p>
                                <p> Deskripsi : <span style={{fontWeight:"600"}}>{this.state.deskripsi}</span></p>
                                <p> Harga Distributor : <s style={{color:"red",fontWeight:"500"}}>Rp {this.state.harga_distri}</s></p>
                                <p> Harga Bandrol : <span style={{fontWeight:"600"}}>Rp {this.state.harga_bandrol}</span></p>
                                <p> <br/>Qty: <input type="number" name="qty" onChange={e => this.props.setField(e)}/></p>
                                <button className="btnlogin btn-lg btn-primary btn-block " type="submit" onClick={(e) => this.addCart(e)} value={this.props.location.pathname.slice(8)}><i className="fas fa-cart-plus" ></i> Add to cart</button><br/>
                                {/* <button className="btnlogin btn-lg btn-primary btn-block " type="submit" onClick={(e) => this.delProd(e)} value={this.props.location.pathname.slice(8)}><i class="fas fa-minus-circle" style={{color:"red"}}></i> Delete Product</button><br/> */}
                                <button className="btnlogin btn-lg btn-primary btn-block " type="submit" onClick={() => this.delProd(this.state.id)} value={this.props.location.pathname.slice(8)}><i class="fas fa-minus-circle" style={{color:"red"}}></i> Delete Product</button><br/>

                                <Link to={editurl}> Edit Product </Link>
                            </div>
                    </div>
                    </div>
                </div>
                <br/>
                <Footer/>
            </div>
        )
    }
}
export default connect(
    "qty, produk_id, token", actions)(withRouter(Detail2));