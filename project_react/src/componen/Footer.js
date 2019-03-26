import React, { Component } from 'react';
import '../assets/css/footer.css';
import { Link } from 'react-router-dom';


class Footer extends Component{
    render() {
        return(
            <div>
            <div id="footer">
		      <div className="container">
		      	<div className="row">
		      		<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
		      			<ul className="list-unstyled list-inline social text-center">
		      				<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
		      				<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
		      				<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
		      				<li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
		      				<li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
		      			</ul>
		      		</div>
		      		<hr/>
		      	</div>	
		      	<div className="row">
		      		<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
		      			<p className="h6"> Copyright 2019 | Futsalzone</p>
		      		</div>
		      		<hr/>
		      	</div>	
		      </div>
	         </div>   
            </div>
        )
    }
}
export default Footer;