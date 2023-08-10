import React from 'react'
import Styles from "./contact.module.css";
import './ContactUs.css';
import { useState } from 'react';
import axios from 'axios';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Navigation,Pagination } from "swiper";


import pic001 from '../images/odibanner.jpg';
import pic002 from '../image/bodhost banner.jpg';
import pic003 from '../image/christan banner.jpg'



const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [message, setMessage] = useState('');

  const [mobile, setMobile] = useState('');

  const [last, setLast] = useState('');


  const handleSubmit =async(e)=>{
       e.preventDefault();
       
      const { data}= await axios.post(`https://travel-cg48.onrender.com/support/add`,{name,email,message,mobile})

      console.log(data)
  }

  return (
    <>
    
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={true} 
          navigation={true}
        modules={[Autoplay,Pagination,Navigation]}
        className="myCatorytSwiper"
      >
        <SwiperSlide><img src={pic001} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic002} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic003} className='carouselImg' /></SwiperSlide>

   
      </Swiper>



    

    <div className={Styles.contain}>
    <form>

    <div className={Styles.main}>
        <h1>Let's Get in Touch</h1>
        <div className={Styles.linea}></div>
        <p>Fill out the form below, and we'll be in touch shortly</p>
        <div className={Styles.inp}>
        <div>
        <label>FIRST NAME</label>
        <br/>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}  />
        </div>
        <div>
        <label>LAST NAME</label>
      <br/>
      <input type='text' value={last} onChange={(e)=>setLast(e.target.value)} />
        </div>
      
     
        </div>


        <div className={Styles.inp}>
        <div>
        <label>EMAIL ADDRESS</label>
        <br/>
      <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
        <label>PHONE NUMBER</label>
      <br/>
      <input type='text' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
        </div>
      
     
        </div>
        <br/>
        <br/>
        <label>QUESTION OR COMMENTS</label>
        <br/>
      <textarea value={message} onChange={(e)=>setMessage(e.target.value)}  className={Styles.text}></textarea>
     <br/>
     <br/>
      <button onClick={handleSubmit} className={Styles.btn}>Submit</button>
    </div>

    </form>
    </div>
    </>
  )
}

export default Contact