import React from 'react';
import './Catagory.css';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Navigation,Pagination } from "swiper";



import { Link } from 'react-router-dom';

import pic001 from '../images/odibanner.jpg';
import pic002 from '../image/bodhost banner.jpg';
import pic003 from '../image/christan banner.jpg'

import hindu from '../image/hindu profile.jpg';
import Muslim from '../image/Muslim profile.jpg'
import Buddhist from '../image/bodhist profile.jpeg'
import Jain from '../image/jain profile.jpg';
import Christain from '../image/christian profile.jpg';


const Catagory = () => {

    const Dharm =[
        {
            name:'Hindu',
            photos:hindu,
            link:'/hinduReg'
        },

        {
            name:'Muslim',
            photos:Muslim,
            link:'/muslim'
        },
        
        {
            name:'Buddhist',
            photos:Buddhist,
            link:'/buddhist'
        },
        
        {
            name:'Jain',
            photos:Jain,
            link:'/jain'
        },
        
        {
            name:'Christain',
            photos:Christain,
            link:'/christain'
        },
       
    ]

    const DharmCard =({name,photos,link})=>{
        return(
            <div className='DharmCard'>
                <Link to={link} style={{textDecoration:'none',color:'black',cursor:'pointer'}}>
                <img src={photos} alt="" srcset="" className='photo-cat' />
                <p> {name}</p>
                </Link>
                
            </div>

        );

    }

  return (
    <>


{/* <Swiper
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

   
      </Swiper> */}







    <div className='catagory-banner'>
     <div className='paraCatogry'>
        <p style={{fontSize:'30px', color:"black"}}>Search Marriage Biodata Format in Marathi by Religion</p>

        <p style={{fontSize:'24px', color:"black"}}>Want to make a marriage biodata in Marathi? Then you are in the right place. Make a beautiful biodata for marriage by choosing your religion to make biodata for marriage in Marathi.</p> </div>
    </div>


    <div className='outPutCards'>
        {Dharm.map (mycardsx =>(
           <DharmCard key={mycardsx.name} {...mycardsx} />
        ))}
    </div>
    
    
    
    
    </>
  )
}

export default Catagory