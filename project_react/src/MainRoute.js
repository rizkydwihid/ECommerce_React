import React from 'react';
import {Route, Switch} from 'react-router-dom';
import AppStart from './AppStart';
import Login from './page/Login';
import Home from './page/Home';
import Produk from './page/Produk';
import Bantuan from './page/Bantuan';
import Keranjang from './page/Keranjang';
import Dashboard from './page/Dashboard';
import Register from './page/Register';
import Profile from './page/Profile';
import LoginAdmin from './page/LoginAdmin';
import Detail2 from './componen/Detail2';
import AddProduct from './page/AddProduct';
import DashboardAdmin from './page/DashboardAdmin';
import EditProduct from './page/EditProduct';
// import Detail from './page/Detail';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/" component={AppStart}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/home" component={Home}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/login" component={Login}/>
            <Route path="/produk" component={Produk}/>
            <Route path="/bantuan" component={Bantuan}/>
            <Route path="/keranjang" component={Keranjang}/>
            <Route path="/register" component={Register}/>
            <Route path="/admin" component={LoginAdmin}/>
            <Route path="/detail/:int" component={Detail2}/>
            <Route path="/add" component={AddProduct}/>
            <Route path="/dashboardadmin" component={DashboardAdmin}/>
            <Route path="/cart" component={Keranjang}/>
            <Route path="/edit" component={EditProduct}/>
            
        </Switch>
    )
}
export default MainRoute;