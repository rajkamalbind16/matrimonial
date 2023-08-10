import React from 'react';
import './Christian.css';

import ChristianPicc from '../image/christian profile.jpg';


import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Navigation,Pagination } from "swiper";





import CTemp1 from './CristianTemps/CTemp1.js';
import CTemp2 from './CristianTemps/CTemp2.js';
import CTemp3 from './CristianTemps/CTemp3.js';
import CTemp4 from './CristianTemps/CTemp4.js';
import CTemp5 from './CristianTemps/CTemp5.js';


import pic001 from '../images/odibanner.jpg';
import pic002 from '../image/bodhost banner.jpg';
import pic003 from '../image/christan banner.jpg'

const Christian = () => {
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






    <div className='ChristianBanner'>

    </div>

    <div className='ChristianMainDiv'>
    <div className='ChristianPicDiv'>
            <img src={ChristianPicc} className='proflileChirstan' />
        </div>
        <div className='ChristianPara'>
            <h4>Christian Marriage Biodata Format in Marathi</h4>
            <p>
            Are you a Christian and want to create a marriage biodata in Marathi? Then you are in the right place. In just 5 minutes, you can create Christian Marriage Biodata Format in Marathi and download it in Image and PDF format.
In this biodata format, all information in Christian biodata is in Marathi. This biodata is fully customizable, you can add only the information that you want to add. if you leave any information blank it will not appear in the biodata.
At the top of the Christian biodata is the photo icon of Christian religion and below it you can write heading that you want to add.
Below you are given many Marathi Christian marriage biodata formats, from which you can make biodata in any design you like.
If your religion is different, click on the button below to browse Marathi marriage biodata by religion.



.
            </p>
        </div>
    </div>
    <h3>Other Religion</h3>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <CTemp1/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <CTemp3/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <CTemp4/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <CTemp5/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <CTemp2/>
  </div>

    <div className='stepPara'>
        <h2>Steps to create Christian Marriage Biodata Format in Marathi</h2>

        <p className='myStleLi'>
<li>Step 1: Choose the Christian Marraige bio data design that you like. </li>
<li>Step 2: Click on customize button. ,</li>
<li>Step 3: After clicking on customize button you will be redirected to the create biodata page. </li>
<li>Step 4: Here, you need to fill in the information that you like to add to the biodata </li>
<li>Step 5: After filling in details, click on create biodata button. </li>
<li>Step 6: Congratulation, on your biodata successfully created. You are on the biodata preview page. here you can change the biodata format as well as edit details that you want  to change. </li>
<li>Step 7: To download biodata in image and pdf format you need to fill email and mobile number and click on the download biodata button and follow further steps. </li>
<li>Step 8: After this, you are on the download biodata page to download the image click on the download PNG button, and to download PDF click on the download PDF button.</li> 
</p></div>
    
    
    </>
  )
}

export default Christian