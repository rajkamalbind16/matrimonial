import React from 'react';
import './Buddhist.css';
import BuddhistPIc from '../image/bodhist profile.jpeg';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Navigation,Pagination } from "swiper";

import pic001 from '../images/odibanner.jpg';
import pic002 from '../image/bodhost banner.jpg';
import pic003 from '../image/christan banner.jpg'

import BTemp1 from './BuddhishTemps/BTemp1.js'
import BTemp2 from './BuddhishTemps/BTemp2.js'
import BTemp3 from './BuddhishTemps/BTemp3.js'
import BTemp4 from './BuddhishTemps/BTemp4.js'
import BTemp5 from './BuddhishTemps/BTemp5.js'
const Buddhist = () => {
  return (
    <>

{/*     
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
 */}







    <div className='BuddhistBanner'>

    </div>

    <div className='BuddhistMainDiv'>
    <div className='BuddhistPicDiv'>
            <img src={BuddhistPIc} className='proflileBuddhist' />
        </div>
        <div className='BuddhistPara'>
            <h4>Buddhist Marriage Biodata Format in Marathi</h4>
            <p>
            Are you a Buddhist and want to create a marriage biodata in Marathi? Then you are in the right place. In just 5 minutes, you can create a Buddhist Marriage Biodata Format in Marathi and download it in Image and PDF format.
In this biodata format, all information in Buddhist biodata is in Marathi. This biodata is fully customizable, you can add all the information you want to add if you leave any information blank, and it will not appear in the biodata.
At the top of the Buddhist biodata is the photo of Lord Gautama Buddha, and below it || Namo Buddhay || is written.
Below you are given many Marathi Buddhist marriage biodata formats, from which you can make biodata in any design you like.
If your religion is different, click the button below to browse Marathi marriage biodata by religion.


.
            </p>
        </div>
    </div>
    <h3>Other Religion</h3>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <BTemp1/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <BTemp3/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <BTemp4/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <BTemp5/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <BTemp2/>
  </div>
    <div className='stepPara'>
        <h2>Steps to create Buddhist Marriage Biodata Format in Marathi</h2>

        <p className='myStleLi'>
<li>Step 1: Choose the Buddhist Marraige bio data design that you like. </li>
<li>Step 2: Click on customize button. ,</li>
<li>Step 3: After clicking on customize button you will be redirected to the create biodata page. </li>
<li>Step 4: Here, you need to fill in the information that you like to add to the biodata </li>
<li>Step 5: After filling in details, click on create biodata button. </li>
<li>Step 6: Congratulation, on your biodata successfully created. You are on the biodata preview page. here you can change the biodata format as well as edit details that you want  to change. </li>
<li>Step 7: To download biodata in image and pdf format you need to fill email and mobile number and click on the download biodata button and follow further steps. </li>
<li>Step 8: After this, you are on the download biodata page to download the image click on the download PNG button, and to download PDF click on the download PDF button.</li> 
</p> </div>
    
    
    </>
  )
}

export default Buddhist