import createStore from "unistore";
import axios from "axios";

// const urlDetailProduct = "http://localhost:8010/proxy/produk?rp=50";
// const idproduk = this.props.location.pathname.slice(8)
const baseURL = "http://0.0.0.0:5000/produk"
const initialState = {
  username: "",
  password: "",
  full_name: "",
  email: "",
  is_login: false,
  phone:"",
  listDetail:[],
  nama_produk: "",
  kategori: "",
  merk: "",
  stok: "",
  harga_distri: "",
  harga_bandrol: "",
  warna: "",
  ukuran: "",
  gambar:"",
  deskripsi:"",
  qty: "",
  token: "",
  name: "",
  produk_id: "",
  listKategori: []


};

export const store = createStore(initialState);

export const actions = store => ({
  // mengambil nilai dari data yang inputkan 
  setField: (state, event) => {
    // console.log("tesset", event.target.value)
    return { [event.target.name]: event.target.value };
  },

  // logout
  postLogout: state => {
    return { is_login: false };
  },

  // login admin
  postLoginAdmin: async state => {
    const data = { username: state.username, password: state.password };
    await axios
      .post("http://localhost:8010/proxy/auth/pelapak", data,{
        headers: {
          'Content-Type':'application/json',
        }
      })
      .then((response) => {
        console.log("post loginnnnnn!!!!", response.data);
        if (response.status == 200) {
          store.setState({
            is_login: true,
            email:response.data.email,
            token:response.data.token
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // login user
  postLogin: async state => {
    const data = { username: state.username, password: state.password };
    await axios
      .post("http://localhost:8010/proxy/auth/customer", data,{
        headers: {
          'Content-Type':'application/json',
        }
      })
      .then((response) => {
        console.log("post loginnnnnn!!!!", response.data);
        if (response.status == 200) {
          store.setState({
            is_login: true,
            email:response.data.email,
            token: response.data.token
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // registrasi user
  postRegis: async state => {
    const data = { username: state.name, password: state.password, email: state.email, phone: state.phone };
    // console.log("tes", data)
    await axios
      .post("http://localhost:8010/proxy/customer", data,{
        headers: {
          'Content-Type':'application/json',
        }
      })
      .then((response) => {
        // console.log("post loginnnnnn!!!!", response.data);
        if (response.status == 200) {
          store.setState({
            is_login: true,
            username: response.data.username,
            email:response.data.email
          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // post product
  postProduct: async state => {
    const data = {
      nama_produk: state.name,
      kategori: state.kategori,
      merk: state.merk,
      stok: state.stok,
      harga_distri: state.hargadistri,
      harga_bandrol: state.hargabandrol,
      warna: state.warna,
      ukuran: state.ukuran,
      gambar: state.gambar,
      deskripsi: state.deskripsi };
    await axios
      .post("http://localhost:8010/proxy/produk", data,{
        headers: {
          // 'Content-Type':'application/json',
          Authorization: "Bearer " + state.token
        }
      })
      .then((response) => {
        // console.log("post produk!", response.data);
        if (response.status == 200) {
          console.log("ujiiii", response.data)
          store.setState({

          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },

  // edit product
  putProduct: async state => {
    const data = {
      nama_produk: state.name,
      kategori: state.kategori,
      merk: state.merk,
      stok: state.stok,
      harga_distri: state.hargadistri,
      harga_bandrol: state.hargabandrol,
      warna: state.warna,
      ukuran: state.ukuran,
      gambar: state.gambar,
      deskripsi: state.deskripsi };
    await axios
      .put("http://localhost:8010/proxy/produk", data,{
        headers: {
          // 'Content-Type':'application/json',
          Authorization: "Bearer " + state.token
        }
      })
      .then((response) => {
        // console.log("post produk!", response.data);
        if (response.status == 200) {
          console.log("ujiiii", response.data)
          store.setState({

          });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  // delete product
  deleteProduct: async (state, id) => {
    const deleteData = {
      method: 'delete',
      url: URL,
      headers: { Authorization: "Bearer " + state.token }
  }
  await axios(deleteData)
      .then(function (response) {
          
          if (response.status == 200) {
              store.setState({
                produk_id: "",
                nama_produk: "",
                kategori: "",
                merk: "",
                stok: "",
                harga_distri: "",
                harga_bandrol: "",
                warna: "",
                ukuran: "",
                gambar: "",
                deskripsi:""
              })
          }
      })
      .catch(function (error) {
          console.log(error);
      });
},  

  postCart: async (state, e) => {
    const data = { produk_id: e.target.value, qty: state.qty};
    await axios
    // alert(state.token, data)
    .post("http://localhost:8010/proxy/cart", data, {
      headers: {
        Authorization: "Bearer " + state.token
      }
    })
    alert("Success add to cart..")
    .then((response) => {
      // console.log("add cart", response.data);
      alert("Success to add cart")
      })
    },
searchCategory : async state => {
  await axios
  .get(baseURL)
  .then((response)=> {
    store.setState({listKategori: response.data.produk})
  })
  .catch (function(error){
  console.log(error);        
  })
},
getURLSepatu: async state =>{
  await axios
      .get(URL)
      .then(function(response){
          store.setState({listKategori: response.data.produk})
      })
    }
  
});
