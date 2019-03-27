import React, {Component} from 'react';
import '../assets/css/isiproduk.css';

class IsiListUser extends Component {
    render(){
        return(
            <div>
                <div class="card-container-list">
                   <div class="card-image"><br/>
                        <h3 style={{textAlign:"center"}}><b>{this.props.name}</b></h3><hr/>
                   </div><br/>
                   <div class="card-content">
                        <h5><b>Id : {this.props.custid}</b></h5>
                        <h5><b>{this.props.phone}</b></h5>
                        <h5><b>{this.props.email}</b></h5>
                   </div><br/>
                </div><br/>
            </div>     
        )
    }
}
export default IsiListUser;