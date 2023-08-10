import React from 'react'
import Styles from "./contact.module.css"
import match from "./contact.jpg"
import { HiLocationMarker } from 'react-icons/hi';


const Contact = () => {
  return (
    <>
    <div className={Styles.match}>
<img height="100%" width="100%" src={match} />
<h1 className={Styles.word}>  CONTACT US</h1>
    </div>
    <br/>
    <br/>
    <br/>
<br/>
<div className={Styles.container}>
<div className={Styles.left}>
    <h1>Send Us Massage</h1>
    <div className={Styles.line}></div>
    <input type='text' placeholder='Name'/>
    <br/>
    <input type='text' placeholder='Email'/>
    <br/>
    <input type='text' placeholder='Phone'/>
    <br/>
    <textarea placeholder='Please type your massage'></textarea>
    <br/>
    <h3>14923</h3>
    <input type='text' placeholder='Enter above code'/>
    <br/>
    <button >SUBMIT</button>
</div>
<div className={Styles.right}>
    <h3>ANAND MARATHA VADHU VAR KENDRA®</h3>
    <div className={Styles.line}></div>
    <div style={{display:"flex"}}>
    <HiLocationMarker style={{fontSize:"30px"}}/>
    <p>207, 2nd Floor, Atharva Plaza,
          Opp. Shankar Math, Satara Road, Dhankawadi,
           Pune 411043.</p>
    </div>
   
           <br/>
           <br/>
           <div style={{display:"flex"}}>
         
           <p>9822214005, 9921501133</p>
           </div>
           <br/>
           <br/>
           <p>contact@anandmaratha.com</p>
           <br/>
           <br/>
           <br/>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56499.795557325575!2d72.8512357792808!3d19.092350415077107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1687255893136!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
    </>
  )
}

export default Contact