import React from 'react';
import Header from './components/layout/Header/Header.js';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import WebFont from "webfontloader"
import Footer from './components/layout/Footer/Footer.js';
import Home from './components/Home/Home.js'
import ProductDetails from './components/Product/ProductDetails.js'
import Products from './components/Product/Products.js'
import './App.css'
import LoginSignUp from './components/user/LoginSignUp.js';
import store from "./store"
import { loadUser } from './actions/userAction.js';
import {useDispatch, useSelector} from "react-redux"
import UserOptions from "./components/layout/Header/UserOptions"
import Profile from "./components/user/Profile.js"

function App() {

  const {user, isAuthenticated} = useSelector(state=>state.user)

  const dispatch = useDispatch()
  React.useEffect(()=>{
    WebFont.load({
      google:{
        families:["Roboto", "Droid Sans", "Chilanka"]
      }
    })
    dispatch(loadUser())
  }, [])

  return (
    <BrowserRouter>
      <Header />
        {isAuthenticated && <UserOptions user = {user} />}
        {/* UserOptions 8:13 to 8:20 */}
      <Routes>
        <Route exact path = "/" element={<Home />} />
        <Route exact path = "/product/:id" element={<ProductDetails/>} />
        {/* search 6:35 */} 
        <Route exact path = "/products" element={<Products/>} /> 
        <Route exact path = "/products/:keyword" element={<Products/>} />
        {/* Search and pagination 7:00   &&  filter after 7:00 to 7:25*/}
        <Route exact path = "/login" element={<LoginSignUp/>} />
        <Route exact path = "/account" element={<Profile user={user}/>} />
        {/* Protected Routes 8:42 to 8:45 */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
