import React, { useState } from 'react'
import './LoginForm.css'
import { assets } from '../../assets/assets'
const LoginForm = ({setShowLogin}) => {

    const [userCurState, setUserState] = useState ('Login')
  return (
    <div className='login_popup'>
      <form  className="form-conatiner">
        <div className="popup-title">
            <h2>{userCurState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="input-field">
            {userCurState === "Login"? <></> : <input type="text" placeholder='Your Name' required/>}
            <input type="email" placeholder='Your email' required/>
            <input type="password" placeholder='Password' required/>
        </div>
        <button>{userCurState==='Sign Up'? "Create Account" : 'Log In'}</button>
        <div className="login-condition">
            <input type="checkbox" required id='checkterm'/>
            <label htmlFor="checkterm"><p>By continuing, i agree to the terms of use & privacy policy.</p></label>
        </div>
        {userCurState === 'Login'
        ?<p>Create a new Account? <span onClick={()=> setUserState('Sign Up')}>Click Here</span></p> 
        : <p>Alreadhy have Account? <span onClick={()=> setUserState('Login ')}>Login Here</span></p>
        }
        
        
      </form>
    </div>
  )
}

export default LoginForm
