// import React, {Component} from 'react';
import React, {Component} from 'react';
import '../assets/css/isihome.css';
// import axios from 'axios';
// import {Link} from 'react-router-dom';

const IsiDetail = props => {

        return(
            <div>
                <div className="card-container">
                  <div className="detail-image">
                     <img src={this.props.img} className="imgcard" alt="Avatar" />
                  </div><br/>
                  <div className="detail-content">
                     <h5 style={{textAlign:"center"}}><b>{this.props.produkname}</b></h5>
                     </div><br/>
                  <div className="detail-footer" id="bottom-right">
                    <p>Kategori: <span style={{fontWeight:"600"}}>{this.props.kategori}</span></p>
                    <p>Merk: <span style={{fontWeight:"600"}}>{this.props.merk}</span></p>
                    <p>Stok: <span style={{fontWeight:"600"}}>{this.props.stok}</span></p>
                    <p>Warna: <span style={{fontWeight:"600"}}>{this.props.warnaa}</span></p>
                    <p>Ukuran: <span style={{fontWeight:"600"}}>{this.props.size}</span></p>
                    <p>Deskripsi: <span style={{fontWeight:"600"}}>{this.props.deskrip}</span></p>
                    <p>Harga Distributor: <s style={{color:"red",fontWeight:"500"}}>Rp {this.props.hargaadistri}</s></p>
                    <p>Harga Bandrol: <span style={{fontWeight:"600"}}>Rp {this.props.hargaabandrol}</span></p>
                    <button class="btnlogin btn-lg btn-primary btn-block " ><i className="fas fa-cart-plus" ></i> Add to cart</button><br/><br/>
                     {/* <button class="btnlogin btn-lg btn-primary btn-block " ><i className="fas fa-info-circle"></i> Detail</button><br/> */}
                     {/* <Link to={link} class="btnlogin btn-lg btn-primary btn-block " ><i className="fas fa-info-circle"></i> Detail</Link><br/> */}
                  </div>
                </div>
            </div>
        )
    }
export default IsiDetail;