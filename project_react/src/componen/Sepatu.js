import React, {Component} from 'react';

class Sepatu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            listSepatu: []
        }
    }
    componentDidMount = () => {
        // const self = this;
        this.props.getURLSepatu()
    }

    sepatu = e => {
        this.props.searchKategori('sepatu futsal')
    }

    render() {
        return (
            <div className="card-container">
                  <div className="card-image">
                     <img src={this.props.imeg} className="imgcard" alt="Avatar" />
                  </div><br/>
                  <div className="card-content">
                     <h5 style={{textAlign:"center"}}><b>{this.props.productname}</b></h5>
                     </div><br/>
                  <div className="card-footer" id="bottom-right">
                     <p>Warna: <span style={{fontWeight:"600"}}>{this.props.warna}</span></p>
                     <p>Harga Distributor: <s style={{color:"red",fontWeight:"500"}}>Rp {this.props.hargadistri}</s></p>
                     <p>Harga Bandrol: <span style={{fontWeight:"600"}}>Rp {this.props.hargabandrol}</span></p>
                     {/* <button class="btnlogin btn-lg btn-primary btn-block " type="submit" onClick={() => this.addCart()}><i className="fas fa-cart-plus" ></i> Add to cart</button><br/> */}
                     {/* <button class="btnlogin btn-lg btn-primary btn-block " ><i className="fas fa-info-circle"></i> Detail</button><br/> */}
                     {/* <Link to={this.state.link + this.props.id} class="btnlogin btn-lg btn-primary btn-block" style={{textAlign:"center"}}><i className="fas fa-info-circle"></i> Detail</Link><br/> */}
                  </div>
            </div>
        )
    }
}
export default Sepatu;