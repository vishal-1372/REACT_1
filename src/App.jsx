import React, { useState } from "react"
import Navbar from "./componetes/Nevbar/Nevbar"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder"
import Footer from "./componetes/Footer/Footer"
import LoginPopup from "./componetes/LoginPopup/LoginPopup"

//import './index.css'


const App = () =>{

  const [showLogin,setShowLogin] = useState(false)
  

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className ='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        < Route path="/" element={<Home/>}/>
        < Route path="/cart" element={<Cart/>}/>
        < Route path="/order" element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  ) 
}



export default App
