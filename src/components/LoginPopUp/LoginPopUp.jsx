import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'

const LoginPopUp = ({setShowLogin}) => {

    const [currState, setCurrState] =useState("Log In")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img src={assets.cross_icon} onClick={()=>setShowLogin(false)} alt="" />
            </div>
            <div className="login-popup-input">
                {currState==="Log In"?<></>:<input type="text" placeholder='Your name' required/>}
                
                <input type="email" placeholder='Your email' required/>
                <input type="password" placeholder='Password' required />
            </div>
            <button>{currState==="Sign Up"?"Create Account":"LogIn"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing, i agree to the terms of use & privacy policy</p>
            </div>
            {currState==="Log In"?<p>Create a new  account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrState("Log In")}>Login here</span></p>}
            
            
        </form>
    </div>
  )
}

export default LoginPopUp