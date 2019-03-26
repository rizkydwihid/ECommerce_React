import React, {Component} from 'react';
import '../assets/css/isibantuan.css';
// import {Link} from 'react-router-dom';

class IsiBantuan extends Component{
    render(){
        return(
        <div>
            <div class="page-header"></div>
            <div className="container">
            <div class="info-container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-help">
                            <h3><i className="fa fa-shopping-cart" style={{color:"#47c9af"}} aria-hidden="true"></i> Bagaimana cara
                                belanja disini? </h3>
                            <br/>
                            <p>Mudah kok.. Anda tinggal cari barang yang anda cari. Kemudian anda bisa langsung <br/>klik tombol
                                <img className="help1" src={require('../assets/img/cartplus.png')} /> untuk menambahkan barang ke daftar belanja milik
                                anda.</p>
                            <p>Atau, anda juga bisa langsung klik tombol <img className="help1" src={require('../assets/img/buynow.png')} /> untuk
                                langsung
                                melakukan pembelian barang tersebut.</p>
                            <p>Setelah itu, anda dapat memilih metode pembayaran yang anda inginkan.</p>
                        </div>
                    </div>
        
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-help">
                            <h3><i className="fa fa-credit-card" style={{color:"#47c9af"}} aria-hidden="true"></i> Bagaimana dengan
                                metode pembayarannya? </h3>
                            <br/>
                            <p>Metode pembayaran yang bisa anda gunakan antara lain</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-help">
                            <h3><i className="fa fa-user-circle-o" style={{color:"#47c9af"}} aria-hidden="true"></i> Perlukah membuat
                                akun sebelum belanja? </h3>
                            <br/>
                            <p>Tentu saja perlu.. Salah satu fungsi membuat akun baru adalah anda dapat melihat history belanja
                                anda. </p>
                            <p><br/>
                            Selain itu, berkaitan dengan keamanan antara penjual dan pembeli kami selaku admin dari FUTSALZONE
                                dapat melakukan monitoring terhadapt aktivitas berbelanja anda.</p>
                        </div>
                    </div>
        
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-help">
                            <h3><i className="fa fa-user-plus" style={{color:"#47c9af"}} aria-hidden="true"></i> Bagaimana cara
                                daftar
                                akun baru? </h3><br/>
                            <p>Cara mendaftar akun baru sangatlah mudah. Anda dapat mengikuti langkah-langkah berikut:</p>
                            <p>1. Pilih menu <img className="help3" src={require('../assets/img/regis.png')} /></p>
                            <p>2. Nanti akan muncul halaman untuk mendaftar akun. Anda tinggal mengisi data diri anda sesuai form
                                yang telah disediakan.</p>
                            <p>3. Terakhir, jangan lupa klik tombol <img className="help2" src={require('../assets/img/regis3.png')} />.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-help">
                            <h3><i className="fa fa-shopping-bag" style={{color:"#47c9af"}} aria-hidden="true"></i> Apa saja yang
                                bisa
                                dibeli disini? </h3><br/>
                            <p>Kami adalah web e-commerce yang menjual perlengkapan olahraga khususnya Futsal.</p>
                            <p>Disini anda dapat membeli berbagai perlengkapan futsal seperti <span style={{fontWeight: "800"}}>
                                    sepatu, jersey, bola </span>, dan sebagainya.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="card-help">
                        <img className="help4" src={require('../assets/img/logofz.png')} id="help-img" />
                        </div>
                    </div>
                </div><br/>
            </div>
            <br/>
            </div>
            </div>
            );
        }
    }
export default IsiBantuan;
