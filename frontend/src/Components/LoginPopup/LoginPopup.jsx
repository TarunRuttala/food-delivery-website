import React, { useState } from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({setLogin}) => {

    const [currentState,setCurrentState] = useState("Login");
  return (
    <div className='login-popup'>
      <form className="login-container">
        <div className="login-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setLogin(false)}  src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
            {currentState === "Login"?<></>:<input type="text" placeholder='Your name' required/>}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{currentState==="Sign Up"?"Create Accout":"Login"}</button>
        <div className="login-condition">
            <input type="checkbox" required/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currentState==="Login"? <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>:<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Click here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup