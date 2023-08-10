import React from 'react';
import { useNavigate } from 'react-router-dom';

import mimg1 from '../jimg2.jpg';

import m2 from '../logo.png'
import ff1 from '../../photoFrame/ff1.jpg'
import tag4 from '../../tagLine/t4.png'
import up from '../../underline/f1up.png'
import down from '../../underline/f1down.png'
import profilepic from '../pp1.jpg';
import '../JainForm.css'

export default function TransparentForm() {
  const navigate = useNavigate();
  const handleCustomize = () => {
    let boxStyles = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: 'red',
      position: 'relative',
      left: '112px',
      /* Additional styling for the 'box' class if needed */
    };
    const karuSaktaTitle2 = null;
    if (karuSaktaTitle2) {
      boxStyles = {
        ...boxStyles,
        
        /* Additional styling specific to the condition */
      };
    } else {
      boxStyles = {
        ...boxStyles,
        marginBottom:20,
        /* Additional styling specific to the condition */
      };
    }
    let temp = "JTemp1"
    console.log("16")

    navigate(`/JForm/${temp}`)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
    <div
      
      style={{
        width: '595px', // A4 paper width in pixels (72 dpi)
        height: '842px', // A4 paper height in pixels (72 dpi)
        backgroundImage: `url(${mimg1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <form
       
        style={{
          maxWidth: '500px',
          margin: '0 auto',
          background: 'transparent',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
                  <div
          className='data'
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
            top:-425,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
{/* <img src={m2} className='logo' alt="My Image" style={{ borderRadius: '100%', backgroundColor: 'transparent', width: '80px', height: '95px', position: 'absolute', top: '0px', right: '', zIndex: 3 }} /> */}

<img src={up} className='u1' alt="My Image" style={{left:15, width: '105px', height: '35px', position: 'absolute', top: '120px', zIndex: 2, backgroundColor: 'transparent', transform: 'rotate(90deg)' }} />


<img src={m2} className='tag' alt="My Image" style={{ width: '70px', height: '65px', position: 'absolute', top: '98px', zIndex: 1, backgroundColor: 'transparent' }} />

<img src={down} className='u1' alt="My Image" style={{right:15, width: '105px', height: '35px', position: 'absolute', top: '120px',  zIndex: 0, backgroundColor: 'transparent',transform: 'rotate(90deg)' }} />


            <img
              src={ff1}
              className='u1'
              alt='My Image'
              style={{
                width: '120px',
                height: '146px',
                left: '80px',
                position: 'absolute',
                top: '225px',
                zIndex: 0,
                backgroundColor: 'transparent',
              }}
            />
            

{profilepic &&  <img
              src={profilepic}
              className='u1'
              alt='My Image'
              style={{
                width: '96px',
                height: '124px',
                left: '92px',
                position: 'absolute',
                top: '235px',
                zIndex: 0,
                backgroundColor: 'transparent',
              }}
            />}
          </div>

          <div
            className='wrapper'
            style={{
              width: '110%',
              height: '400%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'absolute',
              top: 155,
              zIndex: 0,
              backgroundColor: 'transparent',
            }}
          >
        <div className='details-card'>
        
        <div className='box'>
              
              <label  className='boxs' style={{position:'relative', left:125, color:'red'}}  > || जय जिनेन्द्र ||  </label>
              </div>
             
              <div className='box'>
              
                <label  className='boxs' style={{position:'relative', left:125, color:'red'}} >बायोडाटा</label>
                </div>
                <br/>
              <div className='box'>
                  <label className='title' htmlFor='name'>
                  नाव:
                  </label>
                  <label htmlFor='name'>हिमांशु जैन </label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='address'>
                  धर्म-जात:
                  </label>
                  <label htmlFor='address'>
                  जैन
                  </label>
                </div>
                {/* <div className='box'>
                  <label className='title' htmlFor='fatherName'>
                  गोत्र:
                  </label>
                  <label htmlFor='fatherName'>{gotra}</label>
                </div> */}
                {/* <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  कुलदैवत:
                  </label>
                  <label htmlFor="nanlakksa">{kuldevta}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='dob'>
                  देवक:
                  </label>
                  <label htmlFor='dob'>{dewak}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='email'>
                  नक्षत्र:
                  </label>
                  <label htmlFor='email'>{naksatra};</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='name'>
                  राशी:
                  </label>
                  <label htmlFor='name'>{rashii}</label>
                </div> */}

                {/* <div className='box'>
                  <label className='title' htmlFor='age'>
                  गण:
                  </label>
                  <label htmlFor='age'>{gann}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='religion'>
                  नाडी:
                  </label>
                  <label htmlFor='religion'>{naadi}</label>
                </div> */}
                <div className='box'>
                  <label className='title' htmlFor='mob'>
                  ऊंची:
                  </label>
                  <label htmlFor='mob'>5'4</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='dob'>
                  वर्ण:
                  </label>
                  <label htmlFor='dob'>kala</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='jobTitle'>
                  रक्तगट:
                  </label>
                  <label htmlFor='jobTitle'>A+</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='age'>
                  जन्मतारीख:
                  </label>
                  <label htmlFor='age'>12-09-1995</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='religion'>
                  जन्म वेळ:
                  </label>
                  <label  htmlFor='religion'>सकाळी ७ वाजता ३० मिनिटे</label>
                </div>
                <div className='box'>
                  {/* <label className='title' htmlFor='mob'>
                  संपर्क:
                  </label> */}
                  {/* <label htmlFor='mob'>9876543210</label> */}
                </div>
                <div className='box'>
                  <label className='title' htmlFor='dob'>
                  जन्मदिनांक:
                  </label>
                  <label htmlFor='dob'>12-09-1995</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='jobTitle'>
                  जन्म स्थळ:
                  </label>
                  <label htmlFor='jobTitle'>teacher</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='address'>
                  शिक्षण:
                  </label>
                  <label htmlFor='address'>
                  Msc MPhil
                  </label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='fatherName'>
                  नोकरी/व्यवसाय:
                  </label>
                  <label htmlFor='fatherName'>Teacher</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  वेतन/उत्पन्न:
                  </label>
                  <label htmlFor='motherName'>50000</label>
                </div>
               
                <div className='box'>
  <label  className='boxs' style={{position:'relative', left:125, color:'red'}} >कौटुंबिक माहिती</label>
</div>


                <div className='box'>
                  <label className='title' htmlFor='email'>
                  वडिलांचे नाव:
                  </label>
                  <label htmlFor='email'> जयेश जैन </label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  वडिलांचा व्यवसाय:
                  </label>
                  <label htmlFor="nanlakksa">शेती</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  आईचे नाव:
                  </label>
                  <label htmlFor="nanlakksa"> वन्दना जैन</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  बहीण:
                  </label>
                  <label htmlFor="nanlakksa">वन्ना जैन</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  भाऊ:
                  </label>
                  <label htmlFor="nanlakksa">जय जैन</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  मामा:
                  </label>
                  <label htmlFor="nanlakksa">यश जैन</label>
                </div>
                

                <div className='box'>
                <label  className='boxs' style={{position:'relative', left:125, color:'red'}}  >संपर्क</label>
                </div>
                <div style={{ width:200, position:'relative', left: 50}}>
                <div className='box'>
                  <label style={{position:'relative', left
                  :55}} className='title' htmlFor="nanlakksa">
                 जयेश जैन
                  </label>
                  {/* <label htmlFor="nanlakksa">aknna</label> */}
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  पत्ता:
                  </label>
                  <label  style={{position:'relative', right:35 ,width:260}} htmlFor="nanlakksa">प्लॉट नंबर 90, नगरखट, जेल रोड, मुंबई.</label>
                </div>
               
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  मो.नं.:
                  </label>
                  <label style={{position:'relative', right:35}}  htmlFor="nanlakksa">90453232535</label>
                </div>
                </div>
        </div>
        <button onClick={handleCustomize} className='customizeB3' htmlFor="customize">CUSTOMIZE</button>
      </div>
      
    </div>

 
  </form>
    
  </div>
    </div>
  );
}
