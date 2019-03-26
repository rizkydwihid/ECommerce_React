import React, {Component} from 'react';
import '../assets/css/cart.css';
import {Link} from 'react-router-dom';

class IsiKeranjang extends Component {
  

    render(){
        return(
                <div> 
                      <div class="row more-info-cart cart">
                      <div class="col-md-2">
                      <img src={this.props.imeg} class="img-responsive" width="100" height="100" />
                      </div>
                      <div class="col-md-2">
                        <h5 className="user-name"><b>Nama Barang</b></h5>
                        <h5 class="user-mail"><i>{this.props.namabarang}</i></h5>
                      </div>
                      <div class="col-md-2">
                        <h5 class="user-name"><b>Total Beli</b></h5>
                        <h5 class="user-mail"><i>{this.props.totqty}</i></h5>
                      </div>
                      <div class="col-md-2">
                          <h5 class="user-name"><b>Total Bayar</b></h5>
                          <h5 class="user-mail"><i>{this.props.totbayar}</i></h5>
                      </div>
                      <div class="col-md-2">
                          <h5 class="user-name"><b>Status</b></h5>
                          <h5 class="user-mail"><i>{this.props.status}</i></h5>
                      </div>
                      <div class="col-md-2">
                          <Link to="/edit" style={{color:"red",textDecoration:"none", fontWeight:"600"}}><i class="fas fa-times-circle"></i> Batalkan</Link><br/><br/>
                          <Link to="/login" style={{color:"#287a6a",textDecoration:"none", fontWeight:"600"}}><i class="fas fa-money-bill-wave" style={{color:"#e1a70a"}}></i> Bayar</Link>
                      </div>
                      </div>
                      <br/>
                    <br/>
                </div>
        )
    }

}
export default IsiKeranjang;