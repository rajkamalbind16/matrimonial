import React, { useState, useEffect } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Styles from "./home.module.css"
import Slider from "react-slick";
import { motion, useCycle } from 'framer-motion';
import { Autoplay } from "swiper";
import { CSSTransition } from 'react-transition-group';

import "./slider.css"
import { Swiper, SwiperSlide } from "swiper/react";

import p1 from "./picc/p1.jfif"
import p2 from "./picc/p2.jfif"
import p3 from "./picc/p3.jfif"
import p4 from "./picc/p4.jpg"
import p5 from "./picc/p5.jpg"
import p6 from "./picc/p6.jpg"
import img1 from "./picc/img1.jpg"
import img2 from "./picc/img2.jpg"
import {BsFillBalloonHeartFill,BsFillBellFill,BsFillCalendarHeartFill} from "react-icons/bs"
import {GiHeartEarrings,GiGemNecklace} from "react-icons/gi"
import {FaMusic} from "react-icons/fa"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

const Home = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    p1,
    p2,
    p3,
    // Add more image URLs as needed
  ];
    const [showText, setShowText] = useState(false);

    const flightLoading = 90;
    const hotelLoading = 87;
    const carLoading = 60;
    const cruisesLoading = 55;

    const calculateProgressBarWidth = (loading) => {
        return {
            width: `${loading}%`,
        };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setShowText(true);

            setTimeout(() => {
                setShowText(false);
            }, 2000); // Hide the text after 2 seconds
        }, 3000); // Show the text every 3 seconds

        return () => clearInterval(interval);
    }, []);



    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>


<div>
    <div className="slider">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          style={{ display: index === currentSlide ? 'block' : 'none' }}
        />
      ))}
    </div>
    <div className="dot-buttons">
      {images.map((_, index) => (
        <button
          key={index}
          className={index === currentSlide ? 'active' : ''}
          onClick={() => setCurrentSlide(index)}
        />
      ))}
    </div>
  </div>
  <div className={Styles.help}>
    <p>Your Most Importent Day</p>
    <h3>Any Wedding Help </h3>
    <h3>You Need</h3>
    <Link to="./contact">
    <button className={Styles.btn}>Contact Us</button>
    </Link>
   
  </div>

  <div className={Styles.contain}>
<div>
    <BsFillBalloonHeartFill className={Styles.icons}/>
    <h3>Acceessories</h3>
</div>
<div>
<GiHeartEarrings className={Styles.icons} />
<h3>Wedding Dresses</h3>
</div>
<div>
    <BsFillBellFill className={Styles.icons}/>
    <h3>Decor & Styling</h3>
</div>
<div>
<FaMusic className={Styles.icons}/>
<h3>Music &s</h3>
</div>
<div>
    <BsFillCalendarHeartFill className={Styles.icons}/>
    <h3>Wedding Planners</h3>
</div>
<div>
<GiGemNecklace className={Styles.icons}/>
<h3>Jewelry</h3>
</div>
  </div>

            {/* <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img src={p1} className='carouselImg' /></SwiperSlide>
                <SwiperSlide><img src={p2} className='carouselImg' /></SwiperSlide>
                <SwiperSlide><img src={p3} className='carouselImg' /></SwiperSlide>
                <SwiperSlide><img src={p4} className='carouselImg' /></SwiperSlide>
                <SwiperSlide><img src={p5} className='carouselImg' /></SwiperSlide>
                <SwiperSlide><img src={p6} className='carouselImg' /></SwiperSlide>


            </Swiper> */}


            <div className={Styles.text}>
                {showText && (
                    <motion.h1
                        initial={{ y: -100 }} // Initial position above the viewport
                        animate={{ y: 0 }} // Animate to the default position
                        exit={{ y: 100 }} // Exit animation, move back above the viewport
                        transition={{ duration: 1, ease: 'easeInOut' }} // Animation duration and easing
                    >
                        <h1>आनंद मराठा वधुवर केंद्र</h1>
                    </motion.h1>
                )}
            </div>
            <h3 className={Styles.texta}>मराठा समाजासाठी महाराष्ट्रातील अग्रणी विवाहसंस्था®</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <div className={Styles.textb}>
                {showText && (
                    <motion.p
                        initial={{ y: 100 }} // Initial position above the viewport
                        animate={{ y: 0 }} // Animate to the default position
                        exit={{ y: -100 }} // Exit animation, move back above the viewport
                        transition={{ duration: 1, ease: 'easeInOut' }} // Animation duration and easing
                    >
                        <p>» More Than 16000 new Registration every Year</p>
                        <p>
                            » Our Marriage Bureau is only for MARATHA Caste
                        </p>
                        <p>» Profile Matching & Express Interest facilities are available</p>
                        <p>» Profile Matching & Express Interest facilities are available</p>
                        <p>» No need to register your name with any other bureau</p>

                        <p>

                            » Thousands of marriages are settled through our bureau as on today</p>
                    </motion.p>
                )}
            </div> */}
            <br />
            <br />
            <br />   <br />
            <br />
            <br />
            <br />
            <br />   <br />
            <br />
            <br />
            <br />   <br />
            <br />
            <br />
            <div className={Styles.services}>
                <h3>Our Services</h3>
                <p>Welcome to Anand Maratha Matrimony Services, the premier matrimonial service provider exclusively for Maratha community. We understand that the Maratha community is diverse and rich in culture and traditions. At Anand Maratha Matrimony Services, we are committed to helping you find your life partner from within the Maratha community, whether you are looking for a match from 96 Kuli Maratha, Deshmukh Maratha, Kunbi Maratha, or any other subcaste within the Maratha community. We trust choosing your soul mate is a big and important decision, and hence effort towards giving a simple and safe matchmaking occurrence for you and your family. The purpose behind making maratha matrimony site online is to connect people with other having same interest and habit. You can find a perfect match of your Maratha caste or particular interest. So if you are still looking for someone special in your life then you should really enroll with Anand Maratha Matrimony.</p>
                <p>With over 25 years of experience in the field of best matrimonial services, we have earned a reputation for being one of the most reliable and trustworthy service providers within the Maratha community. Our database is filled with verified profiles of eligible brides and grooms from within the Maratha community, ensuring that you find the perfect match that meets your preferences and expectations. Our services include personalized matchmaking services, access to verified profiles, and a range of membership plans that cater to your budget and requirements. Our team of experienced professionals is dedicated to guiding you through the entire process, from creating your profile to finding the perfect match.</p>
            </div>

            <br />
            <br />
            <br />

            <div className={Styles.card}>
                <div>

                    <img height='100%' width="100%" src={img1} />
                    <div className={Styles.textc}>
                        <h4>Enroll</h4>
                        <p>Enroll with us by paying just Rs.2000/- with net banking / debit or credit card. You can also submit enroll form & can pay fees through separate payment gateway link afterwards.</p>
                        <br />
                        <br />
                        <br />
                        <button>See More</button>
                    </div>

                </div>
                <div>
                    <img height='100%' width="100%" src={img1} />
                    <div className={Styles.textc}>
                        <h4>Matching</h4>
                        <p>You can search similar profiles for you through this option instantly with criteria like height, education, age, mangalik, native place & occupation place. However all these criteria are optional.</p>
                        <br />
                        <br />
                        <br />
                        <button>See More</button>
                    </div>
                </div>
                <div>
                    <img height='100%' width="100%" src={img1} />
                    <div className={Styles.textc}>
                        <h4>Response</h4>
                        <p>You will get contact details of matching profiles through this option by mail. Also your interest will be sent to all these matching profiles by SMS & email after submission.</p>
                        <br />
                        <br />
                        <br />
                        <button>See More</button>
                    </div>
                </div>
            </div>


            <br />
            <br />
            <br />

            <div className={Styles.about}>
                <div>
                    <h1>About Us</h1>
                    <p>Ours is a most popular & trusted marriage bureau only for Maratha Caste having profiles from all over nearby states, Maharashtra & abroad. We have experience of last 24 years with around 16000 new registrations every year. Our services are –express interest, exact online search, getting contact details of profiles instantly by SMS or email. Around 24000 happy marriages are well settled through us as yet.</p>
                </div>
                <div>
                    <img width="100%" height="100%" src={img2} />
                </div>
                <div>

                    <div>
                        <h1>Profiles</h1>
                        <div className={Styles.progressa}>
                            <div className={Styles.progress} style={calculateProgressBarWidth(flightLoading)}>
                                Groomes: {flightLoading}%
                            </div>
                        </div>
                        <div className={Styles.progressa}>
                            <div className={Styles.progress} style={calculateProgressBarWidth(hotelLoading)}>
                                Brides: {hotelLoading}%
                            </div>
                        </div>
                        <div className={Styles.progressa}>
                            <div className={Styles.progress} style={calculateProgressBarWidth(carLoading)}>
                                Diverse Grooms: {carLoading}%
                            </div>
                        </div>

                        <div className={Styles.progress}>
                            <div className="progress" style={calculateProgressBarWidth(cruisesLoading)}>
                                Diverse Bridge: {cruisesLoading}%
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <br />
            <br />
            <br />
            <br />

            <div className={Styles.slider}>
                <Carousel className={Styles.slide} responsive={responsive}>
                    <div>
                        <div className={Styles.circle}></div>
                        <h1>MB87887(patil)</h1>
                        <p>DOB:07/06/1998</p>
                        <p>Height:5.04</p>
                        <p>Education:B.tech</p>
                        <p>Occupation:Agreeculture</p>
                    </div>
                    <div>
                        <div className={Styles.circle}></div>
                        <h1>MB87887(patil)</h1>
                        <p>DOB:07/06/1998</p>
                        <p>Height:5.04</p>
                        <p>Education:B.tech</p>
                        <p>Occupation:Agreeculture</p>

                    </div>
                    <div>
                        <div className={Styles.circle}></div>
                        <h1>MB87887(patil)</h1>
                        <p>DOB:07/06/1998</p>
                        <p>Height:5.04</p>
                        <p>Education:B.tech</p>
                        <p>Occupation:Agreeculture</p>

                    </div>
                    <div>  <div className={Styles.circle}></div>
                        <h1>MB87887(patil)</h1>
                        <p>DOB:07/06/1998</p>
                        <p>Height:5.04</p>
                        <p>Education:B.tech</p>
                        <p>Occupation:Agreeculture</p>
                    </div>
                    <div>
                        <div className={Styles.circle}></div>
                        <h1>MB87887(patil)</h1>
                        <p>DOB:07/06/1998</p>
                        <p>Height:5.04</p>
                        <p>Education:B.tech</p>
                        <p>Occupation:Agreeculture</p>

                    </div>
                    <div>
                        <div className={Styles.circle}></div>
                        <h1>MB87887(patil)</h1>
                        <p>DOB:07/06/1998</p>
                        <p>Height:5.04</p>
                        <p>Education:B.tech</p>
                        <p>Occupation:Agreeculture</p>

                    </div>
                    <div>
                        <div className={Styles.circle}></div>
                        <h1>MB87887(patil)</h1>
                        <p>DOB:07/06/1998</p>
                        <p>Height:5.04</p>
                        <p>Education:B.tech</p>
                        <p>Occupation:Agreeculture</p>

                    </div>
                </Carousel>;
            </div>





            <br />
            <br />
            <br />
            
            <div className={Styles.servicesa}>
            <h1>Our services</h1>
                <p>Anand Maratha® is a main platform to meet similar people and find the one with whom you can spend rest of your life together. We have a success story of couples who found the perfect match on Anand Maratha vadhu var suchak mandal. The online Marathi matrimony sites are increasing popularity among singles and all the single people around the world should use this platform to find the perfect partner for them. However, in this online world, you really don’t know what the truth is. You should follow Maratha marriage bureau if you want to find a perfect partner on matrimonial sites.</p>
                <p>We understand that finding the right partner can be a challenging and overwhelming task. That's why we offer personalized matchmaking services that cater to your specific needs and preferences. We believe that every individual within the Maratha Caste deserves to find their life partner and build a fulfilling and happy life together. Join Anand Maratha Matrimony Services today and take the first step towards finding your life partner within the Maratha community. We are committed to helping you find the perfect match that meets your preferences and expectations, and we are dedicated to ensuring that you have a pleasant and stress-free experience throughout the process.</p>

            </div>



            <br/>
            <br/>
            <div className={Styles.carda}>
                <div>

                    <img height='100%' width="100%" src={img1} />
                    <div className={Styles.textca}>
                        <h4>Photo edit</h4>
                        <p>You can add/update your photo instantly through this option very easily. Your photo will be added/updated on website instantly after submission of photo. For this option you need only your registered email ID & registration ID.</p>
                        <br />
                        <br />
                        <br />
                        <button>See More</button>
                    </div>

                </div>
                <div>
                    <img height='100%' width="100%" src={img1} />
                    <div className={Styles.textca}>
                        <h4>Success Stories</h4>
                        <p>This is listing of grooms & brides who are happily married through us & enjoying their married life. Due to our private guidelines, we have not given their photograph & contact details online. Around 24000 weddings are settled through us as yet.</p>
                        <br />
                        <br />
                        <br />
                        <button>See More</button>
                    </div>
                </div>
                <div>
                    <img height='100%' width="100%" src={img1} />
                    <div className={Styles.textca}>
                        <h4>Magazine</h4>
                        <p>You can download month wise short listing of all matching profiles through this option. This is only month wise listing of matching profiles registered in particular month with its link. You can get this month wise listing for last year.</p>
                        <br />
                        <br />
                        <br />
                        <button>See More</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home