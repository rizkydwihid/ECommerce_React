import React, {Component} from 'react';
import Navbar from '../componen/Navbar';
// import {Link} from 'react-router-dom';
import IsiListUser from '../componen/IsiListUser';
import Footer from '../componen/Footer';
import axios from 'axios';
import {connect} from 'unistore/react';
import {withRouter} from 'react-router-dom';
import {actions} from '../store';

class ListUser extends Component {
    constructor (props){
        super(props);
        this.state = {
            listUser: []
        }
    }
    componentDidMount = async () => {
    // this.props.getURLProduk()
    const self = this;    
    await axios
    .get("http://localhost:8010/proxy/customer", {
        headers: {
        Authorization: "Bearer " + this.props.token
        }
      })
    .then(function(response){
        // console.log("rensponse data", response)
        self.setState({listUser: response.data.List})
        // console.log("test get produk", response.data.List)
    })
    .catch(function(error){
        // console.log("failed get data product", error);
    });
//     console.log("local state product", this.state.listProduk)
}

render(){

    return(
        <div>
            <Navbar/>
            <div class="page-header"></div>
                <div class="produk-container">
                <div class="card-section">
                {this.state.listUser.map((item, key) => {
                        // console.log("gambar", item.username)
                        const custid = item.cust_id !== null ? item.cust_id: 0;
                        const name= item.username !== null ? item.username: "";
                        const psw = item.password !== null ? item.password: "";
                        const phone= item.phone !== null ? item.phone: "";
                        const email= item.email !== null ? item.email: "";
                        return <IsiListUser key={key} custid={custid} name={name} psw={psw} phone={phone} email={email}/>; 
                    })}
            </div>
            </div><br/>
            <Footer/>>
        </div>
    )
}
}
export default connect(
    "token", actions)(withRouter(ListUser));