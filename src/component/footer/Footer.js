import React from 'react'
import Styles from "./footer.css";
import loogo from './pic/6a2cf129.jpeg';
const Footer = () => {
  return (
    <>
  
  <div className='footerr'>
  <div className='mainFooter'>
    <div className='footerDiv' style={{width:'60%',textAlign:'left'}}>
        <h3>About Marathi Biodata Maker</h3>
        <p>Create and download biodata for marriage in Marathi using Marathi Biodata Maker. You will get Marriage Biodata Format in Marathi with Image and PDF. Create the best Marathi marriage biodata right now.</p>
    </div>
    <div className='footerDiv' style={{width:'20%'}}>
        <h3> Discover</h3>
        <p>Blog</p>
        <p>About Us</p>
        <p>Reviews</p>
        <p>Pricing</p>
    </div>
    <div className='footerDiv'style={{width:'20%'}}>
        <h3>Resources</h3>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Refund Policy</p>
        <p>Shipping & Delivery</p>
    </div>
  </div>
  <div className='lowerFotter' >
 
  <div class="copy-right">
    Designed by V-Tech.
  </div>
</div>
    </div>
    </>
  )
}

export default Footer