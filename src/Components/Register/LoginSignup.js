import React, { useState } from 'react'
import registerStyle from "./Register.module.css"
import { assets } from '../../assets/assets';

const LoginSignup = (props) => {

  const [state, setState] = useState("Login");

  return (
   <div className={registerStyle['login-popup']}> 
      <form className={registerStyle['login-form']}>

          <div className={registerStyle['login-title']} >
            <h2>{state}</h2>
            <img onClick={()=>props.onClose()} src={assets.cross_icon} alt='cross' />
          </div>

          <div className={registerStyle['login-inputs']}>
            {state!=='Login' && <input type='text' placeholder='Your name' required/>}
              <input type='email' placeholder='Your email' required/>
              <input type='password' placeholder='Password' required/>
          </div>

          <button>
            {state==='Login' ? 'Login':"Create Account"}
          </button>

        <div className={registerStyle['login-condition']}>
          <input type='checkbox' required/>
          <p>I agree terms and conditions</p>
        </div>

        {state==='Login'?
      <p>Create an account <span onClick={()=>setState('Signup')}>Click here</span></p>  :
      <p>Already have an account? <span onClick={()=>setState('Login')}>Login</span></p>
      }
      </form>
      </div>
  )
}

export default LoginSignup