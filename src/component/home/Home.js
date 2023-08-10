import React, {  useEffect, useState } from 'react';
// import { SearchContext } from './SearchContext';
// import ScrollCarouselCard from './ScrollCarouselCard';
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Navigation, Pagination } from "swiper";
import Styles from "./home.module.css";
import "./home1.css"



import {Link} from "react-router-dom";

import pic01 from './picss/imgg3.jpg';
import pic02 from './picss/img5.jpg';
import pic03 from './picss/im1.jpg';
import pic04 from './picss/im2.jpeg';
import pic05 from './picss/im3.jpg';
import pic06 from './picss/im4.jpeg';

import pic07 from './picss/im6.webp';
import pic08 from './picss/im41.jpg';
import pic09 from './picss/im5.jpg';

import pic10 from './picss/im20.jpg';
import pic11 from './picss/im15.jpg';

import pic12 from './picss/img2.jpg';
import pic13 from './picss/img4.jpg';
import pic14 from './picss/im13.webp';

import pic15 from './picss/im36.jpeg';
import pic16 from './picss/imhgg.png';

import pic17 from './picss/wallpaperflare.com_wallpaper (2)1.jpg';
import pic18 from './picss/wallpaperflare.com_wallpaper.jpg';
import pic19 from './picss/wallpaperflare.com_wallpaper (3)1.jpg';

import pic20 from './picss/mARRIAGE-bIO-dATA-scaled.jpg';
import pic21 from './picss/Marriage-Biodata-2-1.jpg.webp';
import pic22 from './picss/Marriage-Biodata-1.jpg';
import pic23 from './picss/biodata-for-marriage-for-girl.jpg';

import pic24 from './picss/img1.jpg';
import pic25 from './picss/im35.jpeg';
import pic26 from './picss/im44.jpg';
import pic27 from './picss/im9.jpg';
import pic28 from './picss/pexels-photo-15984432.webp';





import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import ScrollAd from './ScrollAd/ScrollAd';
import Musicpage from './music/Musicpage';
import { colors } from '@mui/material';

const Home = () => {
   const images = [pic03,pic04,pic05,pic06,pic07]
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

  

  localStorage.clear()







  
  return (
    <>    
      <div className={Styles.slide} >
      <div
        style={{
          position: 'absolute', top: -120,left: 0, right:0,width: '120%',height: '120%',overflow: 'hidden',zIndex: -1, // Set a negative z-index to place it at the background
        }}
      >
        <Slider {...settings}>             
          {images.map((image) => (
            <div key={image} style={{ height: '560px',width:'90%' }}>
              <img
                src={image}
                alt="Image 1"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  margin:'auto'
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
<br></br>


<h1 style={{color:'black'}}>Marriage Biodata Format in Marathi</h1> 
<div className='container1'>

<div className='container12'>
  <img src={pic02}/>
</div>
<div className='container13'>

<p>Create and download biodata for marriage in Marathi using Marathi Biodata Maker. You can download marriage biodata format in Marathi in image and PDF format.
Marriage Biodata Format in Marathi is a collection of information about a boy or girl given in the Marathi language while searching for a suitable life partner.
In simple words, for marriage, the information of a boy or girl is arranged in a very nice way in a specific format; we call it Marriage Biodata Format in Marathi.
Biodata format for marriage in Marathi is pdf, image, and word file which contains information about a boy or girl.
In Marathi, marriage biodata is also known as lagnacha biodata or parichay patra.
In our Maharashtrian culture, when a boy and a girl are of marriageable age, they want to find a suitable partner. Their acquaintance sends their information to each other to find the right partner.
Suppose marriage biodata is to send in digital form. In that case, it is in the image, pdf, or word file format, and if it is to give physically, then it is in hard copy, i.e., printed PDF.</p>
</div>


</div>

<h1 style={{color:'black'}}>Why is it necessary to prepare biodata for marriage in Marathi?</h1> 
<div className='container1'>


<div className='container13'>

<p>To find the perfect life partner, you should know everything about the person who will be with you for the rest of your life.
So relatives from both sides share girl or boy details while meeting. These details send to each other online, i.e., through email, WhatsApp, or other social media apps.
If the marriage biodata is to be sent online, then it is sent in digital format, i.e., image and PDF format, and if it is to be sent physically, then it is sent in hard copy, i.e., PDF printout.
The main reason for making a marriage biodata in Marathi is that two people who live with each other throughout their lives understand the complete information about each other from the biodata.
बायोडेटा आवडला की भेटीगाठी होतात व स्थळ आवडले की लग्न जमते. मग प्रतीक्षा कशाची करत आहात आत्ताच विवाहासाठी छान बायोडेटा डाऊनलोड करा.
A biodata must need to prepare before marriage. Therefore, many templates for biodata format with and without a photo are below. You can select a design you like and create beautiful biodata for marriage in Marathi.</p>
</div>
<div className='container12'>
  <img src={pic01}/>
</div>


</div>




<h1 style={{color:'black'}}>What information does the Marathi Biodata format contain?</h1> 
<p style={{color:'black'}}>As mentioned above, if a boy or girl wants to find a suitable partner, they must send their information to each other. Then, you may wonder what information includes in a biodatSo let's see what information it contains.
The biodata format in Marathi contains the personal, family, and contact information of the boy (male, groom) or girl (female, bride). In Marathi Biodata format, information is written separately in three points.</p>
<div className='container1'>



<div className='container14'>
  <img src={pic08}/><button>Personal Information</button>
</div>
<div className='container14'>
  <img src={pic09} /><button>Family Information</button>
</div>
<div className='container14'>
  <img src={pic10}/><button>Contact Information</button>
</div>


</div>

        

<div className='container1'>


<div className='container13'>
<h1>Personal Information</h1>
<p>The first part is Personal Information.
Personal information includes information about the private life of a boy or girl.
It contains three types of information.
Personal details of boy or girl (मुलाची किंवा मुलीची वैयक्तिक माहिती)
Kundli Information (कुंडली मधील माहिती)
Education and Occupation (शिक्षण व व्यवसाईक माहिती)</p>
</div>
<div className='container12'>
  <img src={pic11}/>
</div>


</div>



<div className='container1'>



<div className='container14'>
  <img src={pic12}/><h1>Personal details of boy or girl.</h1>
  <p>Personal details contain the name, date of birth, birth time, place of birth, religion, caste, kuldaivat, height, blood group, and varna(color) of a boy or girl.</p>
</div>
<div className='container14'>
  <img src={pic13} /><h1>Kundli Information</h1>
  <p>Kundli Information contains information about Rashi, Nakshatra, Devak, Nadi, Gan, and Gotra.</p>
</div>
<div className='container14'>
  <img src={pic14}/><h1>Education and Occupation.</h1>
  <p>Educational information is an essential point in a marriage biodata. It contains educational information about a boy or girl. And then Occupation, you want to include your occupational information.
If you are employed or have a business, you can add your company or business name, salary, and income.</p>
</div>


</div>

<div className='container1'>



<div className='container14'>
  <img src={pic15}/><h1>Family Information</h1>
  <p>Family information contains information about the family of the person whose biodata is to create.
It contains information such as the father's name, Occupation, mother's name, total sisters, total married sisters, total brothers, total married brothers, maternal uncle, and surnames of relatives.</p>
</div>
<div className='container14'>
  <img src={pic16} /><h1>Contact Information</h1>
  <p>Contact information contains the family's contact information, such as address and mobile number, and relatives from both sides contact each other using that information.
The address field includes a current residential address or Native address.
And in the mobile number, we can add one to two mobile numbers. When the relatives from the other party want to send you something, they can call or message you on the mobile number you have added.
While entering the number, you should ensure that one of those numbers should be a WhatsApp number.
All the above information will be in the Marathi marriage biodata.</p>
</div>
<div className='container14'>
  
</div>


</div>

  
<h1 style={{color:'black'}}>Types of Marathi Marriage Biodata Format</h1> 
<p style={{color:'black'}}>There are three subtypes of Marathi biodata format..</p>
<div className='container1'>



<div className='container14'>
  <img src={pic17}/><p>Marriage Biodata Format in Marathi by Design</p>
</div>
<div className='container14'>
  <img src={pic18} /><p>2.Marriage Biodata Format in Marathi by Religion</p>
</div>
<div className='container14'>
  <img src={pic19}/><p>3.Marriage Biodata Format in Marathi by File Type</p>
</div>


</div>


<h1 style={{color:'black'}}>Types of Marriage Biodata Format in Marathi by Design</h1> 
<p style={{color:'black'}}>According to design, there are four types of Marathi biodata as follows..</p>
<div className='container1'>



<div className='container14'>
  <img src={pic20}/><p>Marriage Biodata Format in Marathi with Photo</p>
</div>
<div className='container14'>
  <img src={pic21} /><p>Marriage Biodata Format in Marathi without Photo</p>
</div>
<div className='container14'>
  <img src={pic22}/><p>Marathi Biodta Format for boy Marathi</p>
</div>

</div>

<div className='container1'>



<div className='container14'>
  <img src={pic23}/><p>Marriage Biodata Format for girl Marathi</p>
</div>
<div className='container14'>
 
</div>
<div className='container14'>
  
</div>

</div>


<h1 style={{color:'black'}}>Types of Marriage Biodata Format in Marathi by Religion</h1> 
<p style={{color:'black'}}>According to religion, there are five types of Marathi biodata as follows...</p>
<div className='container1'>



<div className='container14'>
  <img src={pic24}/><p>Hindu Marriage Biodata Format in Marathi</p>
</div>
<div className='container14'>
  <img src={pic25} /><p>Muslim Marriage Biodata Format in Marathi</p>
</div>
<div className='container14'>
  <img src={pic26}/><p>Buddhist Marriage Biodata Format in Marathi</p>
</div>

</div>

<div className='container1'>



<div className='container14'>
  <img src={pic27}/><p>Jain Marriage Biodata Format in Marathi</p>
</div>
<div className='container14'>
  <img src={pic28} /><p>Christan Marriage Biodata Format in Marathi</p>
</div>
<div className='container14'>

</div>

</div>
<h1 style={{color:'black'}}>Types of Marriage Biodata Format in Marathi by File Type</h1> 
<p style={{color:'black'}}>According to file type, there are two types of Marathi biodata as follows.
Marriage Biodata Format in Marathi WordFile
Marriage Biodata Format in Marathi PDF</p>

<h1 style={{color:'black'}}>There are some things to remember while making a biodata in Marathi.</h1> 
<p style={{color:'black'}}>While creating a Marathi biodata, you should write all the information about yourself or the person whose biodata you want to edit. You should be honest, write correct information, and avoid wrong information in biodata.
When making biodata, choose the format you like.</p>

<h1 style={{color:'black'}}>Marathi Biodata Maker</h1> 
<p style={{color:'black'}}>मराठी विवाह बायोडाटा फॉरमॅट बनवायचा आहे? मग प्रतीक्षा कशाची करत आहात! आताच लग्नाचा एक मस्त बायोडाटा डाऊनलोड करा.
मराठी बायोडाटा मेकर वेबसाइट चा वापर करून फक्त 5 मिनिटांत विवाहासाठी एक सुंदर बायोडाटा तयार करा.</p>

<h1 style={{color:'black'}}>Need more help?</h1> 
<p style={{color:'black'}}>However, you can contact us if you do not understand anything about it or have any questions. We will guide you about Marathi Marriage biodata for free.</p>
<div className='container2'>
  <h1>Maharashtra's trusted Marathi Biodata Maker, loved by users all over Maharashtra.</h1>
  <p>marathibiodatamaker.com is your simple solution for creating marriage biodata in Marathi online, straight from the web, with 100% security.
</p>
</div>
    </>
  )
}

export default Home