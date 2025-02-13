import React, { useState } from 'react' 
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import PlaceOrder from './Pages/Place Order/PlaceOrder'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Footer from './components/Footer/Footer'
import LoginPopUp from './components/LoginPopUp/LoginPopUp'

const App = () => {
  const [showLogin, setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
      </Routes>
      
    </div>
    <Footer/>
    </>
  )
}

export default App