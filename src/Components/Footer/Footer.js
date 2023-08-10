import React from 'react'
import alogo from "../Home/picc/alogo.png"
import glogo from "../Home/picc/glogo.png"
import Styles from "./footer.module.css"
import and from "../Home/picc/and.jpg"
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai';
import { } from 'react-icons/bs';
import { FaArrowAltCircleUp } from 'react-icons/fa'
const Footer = () => {

    const AghoriUp =() =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'

        })
    }




    return (
        <div className={Styles.container}>
            <div className={Styles.footer}>
                <div style={{display:'block'}}>
                    <h2 id={Styles.DotDot}>Click here for online Payment</h2>
                    {/* <p>......................................</p> */}
                    <img className={Styles.img} width="50%" src={alogo} id={Styles.DotDot} />
                    {/* <p>......................................</p> */}
                    <img className={Styles.img} width="50%" src={glogo} id={Styles.DotDot} />
                </div>
                <div>
                    <img width="100%" height="100%" src={and} />
                </div>
                <div>
                    <h2 id={Styles.DotDot}>Click here for Horoscope</h2>
                    {/* <p>......................................</p> */}
                    <p id={Styles.DotDot}>संचालक : सुहास शिर्के</p>
                    {/* <p>......................................</p> */}
                    <p id={Styles.DotDot}> contact@anandmaratha.com</p>
                    {/* <p>......................................</p> */}
                    <p id={Styles.DotDot}> 9822214005 / 9921501133</p>
                </div>
            </div>

            <h3 style={{ textAlign: "center" }}>Visitor Contact</h3>
            <div className={Styles.visitor}>
                {/* <p>........................................................................................................................................................</p> */}
                <div className={Styles.foot} id={Styles.DotDots}>
                    <p>Home</p>
                    <p>Rules</p>
                    <p>Enroll</p>
                    <p>Search</p>
                    <p>Responde</p>
                    <p>profile</p>
                    <br />
                    <p>Horoscope </p>
                    <p>Renew </p>
                 
                    <p>Sucess Stories</p>
                    <p>Magazine</p>
                    <p>Contact Us</p>
                </div>
                {/* <p>........................................................................................................................................................</p> */}
            </div>

            {/* <div className={Styles.down}>
                <div>
                    <h3>All Rights Reserved © Copyright 2009-2023 Anand Maratha ®</h3>
                    <p>* This is marriage website & not for dating purpose</p>
                </div>
                <div className={Styles.icon}>
                    <BsFacebook />
                    <AiFillInstagram />
                    <AiFillYoutube />
                    <AiOutlineTwitter />
                </div>
            </div> */}

            <span  onClick={AghoriUp}><FaArrowAltCircleUp id={Styles.aghoriUpper} /></span>
        </div>
    )
}

export default Footer