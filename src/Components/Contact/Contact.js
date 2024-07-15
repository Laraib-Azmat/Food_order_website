import React, { useRef, useState } from 'react';
import contactStyle from './ContactStyle.module.css'
import emailjs from 'emailjs-com'


export const Contact = () => {

  const form = useRef();



const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm("service_g04pzjv","template_51tzsji", form.current,'wWbb2c9phUC-l3ssR')
    .then(res=>{
      console.log(res);
      alert("Your message sent!")
      form.current.reset();
    })
    .catch(error=>{
      console.log(error)
      alert("Fail to sent,  try again")
    })

};

  return (
 <div className={contactStyle.contactDiv}>
   <div className={contactStyle["contact-form"]}>
            <h2>Contact Us</h2>
            <form  ref={form} onSubmit={handleSubmit}>
                <div className={contactStyle['form-group']}>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        name="to_name"
                        required 
                    />
                </div>
                <div className={contactStyle['form-group']}>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="from_email" 
                        required 
                    />
                </div>
                <div className={contactStyle['form-group']}>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        id="message" 
                        name="message"  
                        rows="4" 
                        required 
                    />
                </div>
                <button className={contactStyle.submitBtn} type="submit">Submit</button>
            </form>
        </div>
 </div>
  )
}
