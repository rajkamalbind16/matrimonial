import React from 'react';
import './Muslim.css';

import muslimPic from '../image/Muslim profile.jpg';

import { Swiper, SwiperSlide } from "swiper/react";
import MuslimTemp1 from '../template1/MuslimTemps/MuslimTemp1.js'
import MuslimTemp2 from '../template1/MuslimTemps/MuslimTemp2.js'
import MuslimTemp3 from '../template1/MuslimTemps/MuslimTemp3.js'
import MuslimTemp4 from '../template1/MuslimTemps/MuslimTemp4.js'
import MuslimTemp5 from '../template1/MuslimTemps/MuslimTemp5.js'


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Navigation,Pagination } from "swiper";


import pic001 from '../images/odibanner.jpg';
import pic002 from '../image/bodhost banner.jpg';

import pic003 from '../image/christan banner.jpg'

const Muslim = () => {
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






    <div className='MuslimBanner'>

    </div>

    <div className='MuslimMainDiv'>
    <div className='MuslimPicDiv'>
            <img src={muslimPic} className='proflileHMuslim' />
        </div>
        <div className='MuslimPara'>
            <h4>Muslim Marriage Biodata Format in Marathi</h4>
            <p>
            Are you a Muslim and want to create a marriage biodata in Marathi Then you are in the right place. In just 5 minutes, you can create Muslim Marriage Biodata Format in Marathi and download it in Image and PDF format.
In this biodata format, all information in Muslim biodata is in Marathi. This biodata is fully customizable, you can add only the information that you want to add. if you leave any information blank it will not appear in the biodata.
At the top of the biodata is the photo icon of Islam religion and below it, you can write any heading that you want.
Below you are given many Marathi Muslim marriage biodata formats, from which you can make biodata in any design you like.
If your religion is different, click on the button below to browse Marathi marriage biodata by religion.


.
            </p>
        </div>
    </div>
    <h3>Other Religion</h3>
    
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <MuslimTemp1/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <MuslimTemp2/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <MuslimTemp3/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <MuslimTemp4/>
    </div>
    <div style={{display:'flex', justifyContent:'center' ,margin:'40px'}}>
    <MuslimTemp5/>
    </div>
    
    <div>

    </div>

    <div className='stepPara'>
        <h2>Muslim Marriage Biodata Format in Marathi</h2>

        <p className='myStleLi'>
<li>Step 1: Choose the Muslim Marraige bio data design that you like. </li>
<li>Step 2: Click on customize button. ,</li>
<li>Step 3: After clicking on customize button you will be redirected to the create biodata page. </li>
<li>Step 4: Here, you need to fill in the information that you like to add to the biodata </li>
<li>Step 5: After filling in details, click on create biodata button. </li>
<li>Step 6: Congratulation, on your biodata successfully created. You are on the biodata preview page. here you can change the biodata format as well as edit details that you want  to change. </li>
<li>Step 7: To download biodata in image and pdf format you need to fill email and mobile number and click on the download biodata button and follow further steps. </li>
<li>Step 8: After this, you are on the download biodata page to download the image click on the download PNG button, and to download PDF click on the download PDF button.</li> 
</p>
    </div>
    
    
    </>
  )
}

export default Muslim