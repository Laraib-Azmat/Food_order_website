import React, { useEffect, useState } from 'react'
import registerStyle from "./Register.module.css"
import { assets } from '../../assets/assets';
import { motion } from 'framer-motion';

const LoginSignup = (props) => {

  const [state, setState] = useState("Login");

  useEffect(() => {
    document.body.classList.add(registerStyle['no-scroll']);
    return () => {
        document.body.classList.remove(registerStyle['no-scroll']);
    };
}, []);

  return (
   <div className={registerStyle['login-popup']}> 
      <form className={registerStyle['login-form']}>

          <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{opacity:1,y:0}}
          transition={
            {type:'spring', delay:0.2, damping:10, stiffness:120}
           }
          className={registerStyle['login-title']} >
            <h2>{state}</h2>
            <img onClick={()=>props.onClose()} src={assets.cross_icon} alt='cross' />
          </motion.div>

          <div className={registerStyle['login-inputs']}>
            {state!=='Login' && <input type='text' placeholder='Your name' required/>}
              <input type='email' placeholder='Your email' required/>
              <input type='password' placeholder='Password' required/>
          </div>

          <motion.button
          initial={{ opacity: 0, scale:0 }}
          whileInView={{opacity:1, scale:1}}
          transition={
            {type:'spring', delay:0.3, damping:10, stiffness:120}
           }
          >
            {state==='Login' ? 'Login':"Create Account"}
          </motion.button>

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