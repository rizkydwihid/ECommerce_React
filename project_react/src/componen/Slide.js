import React, {Component} from 'react';
import '../assets/css/slider.css';
// import {Link} from 'react-router-dom';

class Slide extends Component{
    render(){
        return(
            <div>
               <div className="card col-md-10 mt-2 mb-5">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" >
                    <div className="w-100 carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-sm-4">
                              <img src={require('../assets/img/swervo-dynamite.jpg')} alt="" className="rounded-circle img-fluid" style={{width:"175px",height:"150px"}} />
                            </div>
                            <div className="col-sm-8">
                              <h3>SWERVO DYNAMITE</h3>
                              <small className="smallest mute" style={{fontWeight:"bold"}}> - Specs -</small><br/>
                              <small>Tersedia banyak warna dan ukuran sesuai dengan selera kaki kalian. Tunggu apalagi, segera cek detail produknya dan beli sekarang juga.</small><br/>
                              <input class="btn" type="button" name="" value="Detail"></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-sm-4">
                              <img src={require('../assets/img/apache-merah.png')} alt="" className="rounded-circle img-fluid" style={{width:"175px",height:"150px"}}/>
                            </div>
                            <div className="col-sm-8">
                              <h3>APACHE</h3>
                              <small className="smallest mute" style={{fontWeight:"bold"}}> - Specs -</small><br/>
                              <small>Tersedia banyak warna dan ukuran sesuai dengan selera kaki kalian. Tunggu apalagi, segera cek detail produknya dan beli sekarang juga.</small><br/>
                              <input class="btn" type="button" name="" value="Beli Sekarang"></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-sm-4">
                              <img src={require('../assets/img/catalys-mistique.jpg')} alt="" className="rounded-circle img-fluid" style={{width:"175px",height:"150px"}}/>
                            </div>
                            <div className="col-sm-8">
                              <h3>CATALYS MISTIQUE</h3>
                              <small className="smallest mute" style={{fontWeight:"bold"}}> - Ortuseight -</small><br/>
                              <small>Tersedia banyak warna dan ukuran sesuai dengan selera kaki kalian. Tunggu apalagi, segera cek detail produknya dan beli sekarang juga.</small><br/>
                              <input class="btn" type="button" name="" value="Beli Sekarang"></input>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="float-right navi">
                    <a className="" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon ico" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon ico" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                    </div>
                  </div>
               </div>
            </div>
            
        );
    }
}
export default Slide;