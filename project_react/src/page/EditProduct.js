import React, {Component} from 'react';
import {connect} from 'unistore/react';
import {withRouter} from 'react-router-dom';
import {actions} from '../store';
import '../assets/css/login.css';
import Navbar from '../componen/Navbar';
import Footer from '../componen/Footer';

class AddProduct extends Component{
    editProduct = () => {
        this.props.putProduct().then(()=> {
        //   console.log("addddd",this);
          this.props.history.replace("/put");
          alert("Edit data success")
        });
      };
  

    render(){
        return(
            <div>
            <Navbar/>
            <div class="page-header"></div>
            <div>
            <div class="profile-container">
                <div className="form_wrapper addpro">
                  <div className="form_container">
                    <div className="title_container">
                      <h2>Add New Product</h2>
                    </div>
                    <div className="row clearfix">
                      <div className="">
                        <form onSubmit={event => event.preventDefault()}>
                            <div className="row clearfix">
                                <div className="col_half">
                                    <div className="input_field"> <span><i class="fas fa-tags"></i></span>
                                    <input type="text" name="name" placeholder="Nama Produk" required onChange={e => this.props.setField(e)}/>
                                    </div>
                                </div>
                                <div className="col_half">
                                    <div className="input_field"> <span><i class="fas fa-list-ul"></i></span>
                                    <input type="text" name="kategori" placeholder="Kategori" required onChange={e => this.props.setField(e)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="input_field"> <span><i class="fas fa-tag"></i></span>
                            <input type="text" name="merk" placeholder="Merk" required onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="input_field"> <span><i class="fas fa-check-circle"></i></span>
                            <input type="number" name="stok" placeholder="Stok" required onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="input_field"> <span><i class="fas fa-dollar-sign"></i></span>
                            <input type="number" name="hargadistri" placeholder="Harga Distributor" required onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="input_field"> <span><i class="fas fa-dollar-sign"></i></span>
                            <input type="number" name="hargabandrol" placeholder="Harga Bandrol" required onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="input_field"> <span><i class="fas fa-palette"></i></span>
                            <input type="text" name="warna" placeholder="Warna" required onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="input_field"> <span><i class="fas fa-sort-numeric-up"></i></span>
                            <input type="number" name="ukuran" placeholder="Ukuran" required onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="input_field"> <span><i class="fas fa-images"></i></span>
                            <input type="text" name="gambar" placeholder="Gambar" required onChange={e => this.props.setField(e)}/>
                            </div>
                            <div className="input_field"> <span><i aria-hidden="true" className="fa fa-envelope"></i></span>
                            <input type="text" name="deskripsi" placeholder="Deskripsi" required onChange={e => this.props.setField(e)}/>
                            </div>          
                            <input className="buttonreg" type="submit" value="Add Product" onClick={() => this.editProduct()} /><br/>
                        </form><br/>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            </div><br/>
            <Footer/>
            </div>
        )
    }
}
export default connect(
    "name, kategori, merk, stok, hargadistri, hargabandrol, warna, ukuran, gambar, deskripsi", actions)(withRouter(AddProduct));