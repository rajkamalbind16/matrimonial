import React, {useState, useEffect, useRef } from 'react';
import { useLocation,  useNavigate }from 'react-router-dom';

import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import { jsPDF } from 'jspdf';
import img1 from '../cimg4.jpg';
import html2canvas from 'html2canvas';
import m2 from '../logo.jpg';
import ff1 from '../../photoFrame/ff1.jpg'
import tag4 from '../../tagLine/t4.png'
import up from '../../underline/f1up.png'
import down from '../../underline/f1down.png'
import profilepic from '../../template1/pp1.jpg';
import u1 from '../../underline/u1.png';
// import profilepic from '../template1/pp1.jpg';
import '../Chirstform.css'

import copyright  from './copyright.png';
export default function CreateTemp() {
  const componentRef = useRef(null);
  const [downloadStatus, setDownloadStatus] = useState('');

  const MyDocument = () => (
    
    <Document>
      <Page style={styles.page}>
        <div style={styles.container} ref={componentRef} />
      </Page>
    </Document>
  );

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  

  // Access individual query parameters
  const greetGod = queryParams.get('greetGod');
  const formatType = queryParams.get('formatType');
  const title = queryParams.get('title');
  const name = queryParams.get('name');
  const study = queryParams.get('study');
  const dob = queryParams.get('dob');
  const selectedDate = queryParams.get('selectedDate');
  const selectedMonth = queryParams.get('selectedMonth');
  const selectedYear = queryParams.get('selectedYear');
  const dobDayName = queryParams.get('dobDayName');
  const dobDay = queryParams.get('dobDay');
  const birthPlace = queryParams.get('birthPlace');
  const navsarNav = queryParams.get('navsarNav');
  const janamNav = queryParams.get('janamNav');
  const religion = queryParams.get('religion');
  const kuldevta = queryParams.get('kuldevta');
  const gotra = queryParams.get('gotra');
  const dewak = queryParams.get('dewak');
  const naksatra = queryParams.get('naksatra');
  const rashii = queryParams.get('rashii');
  const gann = queryParams.get('gann');
  const naadi = queryParams.get('naadi');
  const height = queryParams.get('height');
  const varn = queryParams.get('varn');
  const bloodGroupInput = queryParams.get('bloodGroupInput');
  const yateAathiraktaSirsak = queryParams.get('yateAathiraktaSirsak');
  const yateAathiraktaSirsakTitle = queryParams.get('yateAathiraktaSirsakTitle');
  const job = queryParams.get('job');
  const salary = queryParams.get('salary');
  const yateAathirakta2 = queryParams.get('yateAathirakta2');
  const yateAathiraktaSirsakTitle2 = queryParams.get('yateAathiraktaSirsakTitle2');
  const koutumbikMahiti = queryParams.get('koutumbikMahiti');
  const vadilchaleNav = queryParams.get('vadilchaleNav');
  const vadilachanWayasha = queryParams.get('vadilachanWayasha');
  const aayicheNav = queryParams.get('aayicheNav');
  const bahin = queryParams.get('bahin');
  const bhau = queryParams.get('bhau');
  const mama = queryParams.get('mama');
  const natoSamband = queryParams.get('natoSamband');
  const aapesha = queryParams.get('aapesha');
  const addressLine1 = queryParams.get('addressLine1');
  const addressLineTitle2 = queryParams.get('addressLineTitle2');
  const addressLine2 = queryParams.get('addressLine2');
  const mob_no = queryParams.get('mob_no');
  const pic = queryParams.get('pic');

  const karuSakta1 = queryParams.get('karuSakta1');
  const karuSakta2 = queryParams.get('karuSakta2');
  const karuSakta3 = queryParams.get('karuSakta3');
  const karuSakta4 = queryParams.get('karuSakta4');
    
  const karuSaktaTitle1 = queryParams.get('karuSaktaTitle1');
  const karuSaktaTitle2 = queryParams.get('karuSaktaTitle2');
  const karuSaktaTitle3 = queryParams.get('karuSaktaTitle3');
  const karuSaktaTitle4 = queryParams.get('karuSaktaTitle4');
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


  // const profilePictures = queryParams.get('profilePictures');
  // const queryParams = new URLSearchParams(window.location.search);
  const  profilePicture = localStorage.getItem('photo');
console.log(localStorage)
  console.log(selectedDate)
  const navigate = useNavigate();

  

  const handleDownloadPDF = () => {
    const dpi = 300; // Set the desired DPI value
  
    const options = {
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      width: 595, // A4 paper width in pixels (assuming 72 DPI)
      height: 842, // A4 paper height in pixels (assuming 72 DPI)
    };
  
    html2canvas(componentRef.current, options).then((canvas) => {
      const imgData = canvas.toDataURL('image/png', 1.0); // Set quality to 1.0 for maximum resolution
      const pdf = new jsPDF('p', 'pt', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 595, 842); // Use A4 paper size for width and height
      pdf.save('component-pdf.pdf');
    });
    navigate('/thankyou');
  };
  
  
  const handleDownload = (quality) => {
    let scale;
    switch (quality) {
      case 'low':
        scale = 2;
        break;
      case 'medium':
        scale = 4;
        break;
      case 'high':
        scale = 6;
        break;
      case 'ultrahigh':
        scale = 8;
        break;
      default:
        scale = 2;
    } // Increase the scale factor for higher resolution (e.g., 2 for 2x resolution)

    html2canvas(componentRef.current, { scale: scale }).then((canvas) => {
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = 'component-image.png';
      link.click();
    });

    navigate('/thankyou');
  };

  useEffect(() => {
    const storedDownload = localStorage.getItem('download');
    if (storedDownload) {
      setDownloadStatus(storedDownload);
    }
  }, []);
  console.log(localStorage)
  const handleFree = () => {
    setDownloadStatus('Free');
    console.log(localStorage)
  };

  const handlePaid = () => {
    setDownloadStatus('Paid');
    console.log(localStorage)
  };
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      <div
        ref={componentRef}
        style={{
          width: '595px', // A4 paper width in pixels (72 dpi)
          height: '842px', // A4 paper height in pixels (72 dpi)
          backgroundImage: `url(${img1})`,
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
              

{profilePicture &&  <img
                src={profilePicture}
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
              <div className='details-card'  >
                
              <div className='box'>
              
              <label className='boxs'  style={boxStyles}> </label>
              </div>
             
              <div className='box'>
              
                <label className='boxs'  style={boxStyles}>{formatType}</label>
                </div>
                <br/>
              <div className='box'>
                  <label className='title' htmlFor='name'>
                  नाव:
                  </label>
                  <label htmlFor='name'>{name}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='address'>
                  धर्म-जात:
                  </label>
                  <label htmlFor='address'>
                 {religion}
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
                  <label htmlFor='mob'>{height}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='dob'>
                  वर्ण:
                  </label>
                  <label htmlFor='dob'>{varn}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='jobTitle'>
                  रक्तगट:
                  </label>
                  <label htmlFor='jobTitle'>{bloodGroupInput}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='age'>
                  जन्मतारीख:
                  </label>
                  <label htmlFor='age'>{selectedDate}/{selectedMonth}/{selectedYear}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='religion'>
                  जन्म वेळ:
                  </label>
                  <label htmlFor='religion'>{dobDay}</label>
                </div>
                
                <div className='box'>
                  <label className='title' htmlFor='jobTitle'>
                  जन्म स्थळ:
                  </label>
                  <label htmlFor='jobTitle'>{birthPlace}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='address'>
                  शिक्षण:
                  </label>
                  <label htmlFor='address'>
                  {study}
                  </label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='fatherName'>
                  नोकरी/व्यवसाय:
                  </label>
                  <label htmlFor='fatherName'>{job}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  वेतन/उत्पन्न:
                  </label>
                  <label htmlFor="nanlakksa">{salary}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  {yateAathiraktaSirsakTitle}
                  </label>
                  <label htmlFor="nanlakksa">{yateAathiraktaSirsak}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  {yateAathiraktaSirsakTitle2}
                  </label>
                  <label htmlFor="nanlakksa">{yateAathirakta2}</label>
                </div>
               
                <div className='box'>
  <label className='boxs'  style={boxStyles}>कौटुंबिक माहिती</label>
</div>


                <div className='box'>
                  <label className='title' htmlFor='email'>
                  वडिलांचे नाव:
                  </label>
                  <label htmlFor='email'>{vadilchaleNav}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  वडिलांचा व्यवसाय:
                  </label>
                  <label htmlFor="nanlakksa">{vadilachanWayasha}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  आईचे नाव:
                  </label>
                  <label htmlFor="nanlakksa">{aayicheNav}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  बहीण:
                  </label>
                  <label htmlFor="nanlakksa">{bahin}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  भाऊ:
                  </label>
                  <label htmlFor="nanlakksa">{bhau}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  मामा:
                  </label>
                  <label htmlFor="nanlakksa">{mama}</label>
                </div>
                {karuSaktaTitle1 ? (
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  {karuSaktaTitle1}:
                  </label>
                  <label htmlFor="nanlakksa">{karuSakta1}</label>
                </div>
                ) : null}
                {karuSaktaTitle2 ? (
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  {karuSaktaTitle2}:
                  </label>
                  <label htmlFor="nanlakksa">{karuSakta2}</label>
                </div>
                ) : null}
                {karuSaktaTitle3 ? (
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  {`${karuSaktaTitle3}:`}
                  </label>
                  <label htmlFor="nanlakksa">{karuSakta3}</label>
                </div>
                ) : null}
                {karuSaktaTitle4 ? (
  <div className="box">
    <label className="title" htmlFor="nanlakksa">
      {`${karuSaktaTitle4}:`}
    </label>
    <label htmlFor="nanlakksa">{karuSakta4}</label>
  </div>
) : null}

{downloadStatus === 'Free' && (
  <div
    className="rotate-element"
 
  >
    <p
      style={{
        margin: 0,
        color: 'black',
        fontWeight: 'bold',
        fontSize: '60px',
        wordSpacing: '50px',
        display: 'inline-block',
      }}
    >
      || © वधु वर परिचय ||
    </p>
  </div>
)}

                <div className='box'>
                <label className='boxs'  style={boxStyles}>संपर्क</label>
                </div>
                <div style={{ width:200, position:'relative', left: 50}}>
                <div className='box'>
                  <label style={{position:'relative', left:75}} className='title' htmlFor="nanlakksa">
                  {name}
                  </label>
                  {/* <label htmlFor="nanlakksa">aknna</label> */}
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  पत्ता:
                  </label>
                  <label  style={{position:'relative', right:45}} htmlFor="nanlakksa">{addressLine1}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  {addressLineTitle2}
                  </label>
                  <label htmlFor="nanlakksa">{addressLine2}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  मो.नं.:
                  </label>
                  <label style={{position:'relative', right:45}}  htmlFor="nanlakksa">{mob_no}</label>
                </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div style={{ marginRight: '40px', margin: '40px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
 <div style={{ marginRight: '40px', margin: '40px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
 

 <button className="customizeB2" onClick={()=>handleFree()}>Get Free (with Watermark)</button>
 <button className="customizeB2" onClick={()=>handlePaid()}>Paid</button>
 </div>



 {downloadStatus === 'Paid' || downloadStatus === 'Free' ? (
  <div style={{ marginRight: '40px', margin: '40px', display: 'flex', flexDirection: 'column', gap: '50px' }}>
    <button className="customizeB2" onClick={() => handleDownload('low')}>
      Download In Low Quality
    </button>
    <br />
    <button className="customizeB2" onClick={() => handleDownload('medium')}>
      Download In Medium Quality
    </button>
    <button className="customizeB2" onClick={() => handleDownload('high')}>
      Download In High Quality
    </button>
    <button className="customizeB2" onClick={() => handleDownload('ultrahigh')}>
      Download In Ultra High Quality
    </button>
    <button className="customizeB2" onClick={handleDownloadPDF}>
      Download PDF
    </button>
  </div>
) : null}
</div>


{/* </div> */}
    </div>
  );
}







