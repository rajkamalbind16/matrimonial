import React from 'react';
import './Hindu.css';
import hinduPic from '../image/hindu profile.jpg';


import Temp1 from '../template1/Temp1';
import Temp2 from '../template1/Temp2';
import Temp3 from '../template1/Temp3';
// import Temp9 from '../template1/Temp9';
import Temp5 from '../template1/Temp5';
import Temp6 from '../template1/Temp6';
// import Temp7 from '../template1/Temp7';
// import Temp8 from '../template1/Temp8';



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Navigation,Pagination } from "swiper";


import pic001 from '../images/odibanner.jpg';
import pic002 from '../image/bodhost banner.jpg';
import pic003 from '../image/christan banner.jpg'


const Hindu = () => {
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

   
      </Swiper>
 */}









    <div className='hinduBanner'>

    </div>

    <div className='hinduMainDiv'>
        <div className='hinduPicDiv'>
            <img src={hinduPic} className='proflileHInduu' />
        </div>
        <div className='hinduPara'>
            <h4>Hindu Marriage Biodata Format in Marathi</h4>
            <p>
            Are you a Hindu and want to create a marriage biodata in Marathi Then you are in the right place. In just 5 minutes, you can create Hindu Marriage Biodata Format in Marathi and download it in Image and PDF format.
In this biodata format, all information in Hindu biodata is in Marathi. This biodata is fully customizable, you can add only the information that you want to add. if you leave any information blank it will not appear in the biodata.
At the top of the Hindu biodata is the photo of Lord Ganesha (Ganpati Bappa) and below it || Shree Ganeshay Namah || It is written like this.
Below you are given many Marathi Hindu marriage biodata formats, from which you can make biodata in any design you like.
If your religion is different, click on the button below to browse Marathi marriage biodata by religion.
.
            </p>
        </div>
    </div>
    <h3>Other Religion</h3>
   

    <div className="templeatess" >
      {/* <h1 style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>hi</h1> */}

  <Temp1 style={{ marginBottom: '100px' }} />
  <Temp2 style={{ marginBottom: '10px' }} />
  <Temp3 style={{ marginBottom: '10px' }} />
  <Temp5 style={{ marginBottom: '10px' }} />
  <Temp6 style={{ marginBottom: '10px' }} />
  {/* <Temp7 style={{ marginBottom: '10px' }} /> */}
  {/* <Temp8 style={{ marginBottom: '10px' }} />
  <Temp9 style={{ marginBottom: '10px' }} /> */}
    </div>

    <div className='stepPara'>
        <h2>Steps to create Hindu Marriage Biodata Format in Marathi</h2>

        <p className='myStleLi' >
<li>Step 1: Choose the Hindu Marraige bio data design that you like.</li>
<li>Step 2: Click on customize button.</li>
<li>Step 3: After clicking on customize button you will be redirected to the create biodata page.</li>
<li>Step 4: Here, you need to fill in the information that you like to add to the biodata</li>
<li>Step 5: After filling in details, click on create biodata button.</li>
<li>Step 6: Congratulation, on your biodata successfully created. You are on the biodata preview page. here you can change the biodata format as well as edit details that you want to change.</li>
<li>Step 7: To download biodata in image and pdf format you need to fill email and mobile number and click on the download biodata button and follow further steps.</li>
<li>Step 8: After this, you are on the download biodata page to download the image click on the download PNG button, and to download PDF click on the download PDF button.</li></p>
    </div>
    
    
    </>
  )
}

export default Hindu