import React, {useState, useEffect, useRef } from 'react';
import { useLocation,  useNavigate }from 'react-router-dom';

import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import { jsPDF } from 'jspdf';

import html2canvas from 'html2canvas';
import img1 from '../template1/img2.jpg';
import gj1 from '../ganesh ji/gj1.jpg';
import ff1 from '../photoFrame/ff1.jpg';
import tag3 from '../tagLine/t3.png';
import u1 from '../underline/u1.png';

import copyright  from './copyright.png';
// import profilepic from '../template1/pp1.jpg';
import '../template1/Temp1.css';


export default function CreateTemp() {
  const componentRef = useRef(null);
    const [downloadStatus, setDownloadStatus] = useState('');
 
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
  
  const MyDocument = () => (
    <Document>
      <Page style={styles.page}>
        <div style={styles.container} ref={componentRef} />
      </Page>
    </Document>
  );
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
      marginBottom:15,
      /* Additional styling specific to the condition */
    };
  }

  // const profilePictures = queryParams.get('profilePictures');
  // const queryParams = new URLSearchParams(window.location.search);
  const profilePicture = localStorage.getItem('photo');

console.log(profilePicture);


useEffect(() => {
  const storedDownload = localStorage.getItem('download');
  if (storedDownload) {
    setDownloadStatus(storedDownload);
  }
}, []);
console.log(localStorage)
 
  const navigate = useNavigate();

  

  const handleDownloadPDF = () => {
    const dpi = 15000; // Set the desired DPI value
  
    const options = {
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      width: 636, //595 A4 paper width in pixels (assuming 72 DPI)
      height: 900, //842 A4 paper height in pixels (assuming 72 DPI)
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



  const handleFree = () => {
    setDownloadStatus('Free');
    console.log(localStorage)
  };

  const handlePaid = () => {
    setDownloadStatus('Paid');
    console.log(localStorage)
  };

  console.log(localStorage)
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      <div
        ref={componentRef}
        style={{
          width: '636px', // A4 paper width in pixels (72 dpi)
          height: '900px', // A4 paper height in pixels (72 dpi)
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
              top:-435,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={gj1}
                className='logo'
                alt='My Image'
                style={{
                  borderRadius: '100%',
                  backgroundColor: 'transparent',
                  width: '70px',
                  height: '75px',
                  position: 'absolute',
                  top: '10px',
                  right: '',
                  zIndex: 3,
                }}
              />

              <img
                src={u1}
                className='u1'
                alt='My Image'
                style={{
                  width: '70px',
                  height: '65px',
                  position: 'absolute',
                  top: '20px',
                  right:25,
                  zIndex: 2,
                  backgroundColor: 'transparent',
                  transform: 'rotate(90deg)'
                }}
              />

              <img
                src={tag3}
                className='tag'
                alt='My Image'
                style={{
                  width: '100px',
                  height: '75px',
                  position: 'absolute',
                  top: '58px',
                  zIndex: 1,
                  backgroundColor: 'transparent',
                }}
              />

              <img
                src={u1}
                className='u1'
                alt='My Image'
                style={{
                  width: '70px',
                  height: '65px',
                  position: 'absolute',
                  top: '20px',
                  zIndex: 0,
                  backgroundColor: 'transparent',
                  transform: 'rotate(90deg)',
                  left:25,
                }}
              />

              <img
                src={ff1}
                className='u1'
                alt='My Image'
                style={{
                  width: '120px',
                  height: '146px',
                  left: '50px',
                  position: 'absolute',
                  top: '180px',
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
                  left: '62px',
                  position: 'absolute',
                  top: '190px',
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
                top: 115,
                zIndex: 0,
                backgroundColor: 'transparent',
              }}
            >
              <div className='details-card'>
                
              <div className='box'>
                <label style={boxStyles} className='boxs'>बायोडाटा</label>
                </div>
                {/* <br/> */}
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
                <div className='box'>
                  <label className='title' htmlFor='fatherName'>
                  गोत्र:
                  </label>
                  <label htmlFor='fatherName'>{gotra}</label>
                </div>
                <div className='box'>
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
                </div>

                <div className='box'>
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
                </div>
                
                {/* <div className='box'>
                <label>वैवाहिक स्थिती:</label>
                  <label htmlFor='mob'>{MarriStatus}</label>
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
                  <label htmlFor='religion'>{dobDayName}</label>
                </div>
                
                <div className='box'>
                  <label className='title' htmlFor='jobTitle'>
                  जन्म स्थळ:
                  </label>
                  <label htmlFor='jobTitle'>{birthPlace}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='address'>
                  नावरस नाव:
                  </label>
                  <label htmlFor='address'>
                  {navsarNav}
                  </label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='address'>
                  नावरस नाव/जन्म नाव:
                  </label>
                  <label htmlFor='address'>
                  {janamNav}
                  </label>
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
                {/* <div>
       <label>वजन:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        {/* <br /> */}

        {/* <label htmlFor="nanlakksa">{weight}</label> */}
       {/* </div> */} 
                <div className='box'>
  <label style={boxStyles} className='boxs'>कौटुंबिक माहिती</label>
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
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  
                  
                  नातेसंबंध:
                  </label>
                  <label htmlFor="nanlakksa">{natoSamband}</label>
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
<div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  अपेक्षा:
                  </label>
                  <label htmlFor="nanlakksa">{aapesha}</label>
                </div>

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
                <label style={boxStyles} className='boxs'>संपर्क</label>
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
                  <label  style={{position:'relative', right:0}} htmlFor="nanlakksa">{addressLine1}</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor="nanlakksa">
                  {addressLineTitle2}
                  </label>
                  <label htmlFor="nanlakksa">{addressLine2}</label>
                </div>
                <div className='box' >
                  <label className='title' htmlFor="nanlakksa">
                  मो.नं.:
                  </label>
                  <label style={{position:'relative', right:0}}  htmlFor="nanlakksa">{mob_no}</label>
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











{/* <div className='box'>
<label className='title' htmlFor='name'>
नाव:
</label>
<label htmlFor='name'>{name}</label>
</div>

<div className='box'>
<label className='title' htmlFor='age'>
उम्र:
</label>
<label htmlFor='age'>{age}</label>
</div>
<div className='box'>
<label className='title' htmlFor='religion'>
धर्म-जात:
</label>
<label htmlFor='religion'>{religion}</label>
</div>
<div className='box'>
<label className='title' htmlFor='mob'>
संपर्क:
</label>
<label htmlFor='mob'>{name}</label>
</div>
<div className='box'>
<label className='title' htmlFor='dob'>
जन्मदिनांक:
</label>
<label htmlFor='dob'>{dob}</label>
</div>
<div className='box'>
<label className='title' htmlFor='jobTitle'>
नोकरी/व्यवसाय:
</label>
<label htmlFor='jobTitle'>{jobTitle}</label>
</div>
<div className='box'>
<label className='title' htmlFor='address'>
पत्ता:
</label>
<label htmlFor='address'>
{address}
</label>
</div>
<div className='box'>
<label className='title' htmlFor='fatherName'>
वडिलांचे नाव:
</label>
<label htmlFor='fatherName'>{fatherName}</label>
</div>
<div className='box'>
<label className='title' htmlFor=nanlakksa>
आईचे नाव:
</label>
<label htmlFor=nanlakksa>nanlakksa</label>
</div>

<div className='box'>
<label className='title' htmlFor='email'>
ईमेल:
</label>
<label htmlFor='email'>{email}</label>
</div>
<div className='box'>
<label className='title' htmlFor='name'>
नाव:
</label>
<label htmlFor='name'>{name}</label>
</div>

<div className='box'>
<label className='title' htmlFor='age'>
उम्र:
</label>
<label htmlFor='age'>{age}</label>
</div>
<div className='box'>
<label className='title' htmlFor='religion'>
धर्म-जात:
</label>
<label htmlFor='religion'>{religion}</label>
</div>
<div className='box'>
<label className='title' htmlFor='mob'>
संपर्क:
</label>
<label htmlFor='mob'>{name}</label>
</div>
<div className='box'>
<label className='title' htmlFor='dob'>
जन्मदिनांक:
</label>
<label htmlFor='dob'>{dob}</label>
</div>
<div className='box'>
<label className='title' htmlFor='jobTitle'>
नोकरी/व्यवसाय:
</label>
<label htmlFor='jobTitle'>{jobTitle}</label>
</div>
<div className='box'>
<label className='title' htmlFor='address'>
पत्ता:
</label>
<label htmlFor='address'>
{address}
</label>
</div>
<div className='box'>
<label className='title' htmlFor='fatherName'>
वडिलांचे नाव:
</label>
<label htmlFor='fatherName'>{fatherName}</label>
</div>
<div className='box'>
<label className='title' htmlFor=nanlakksa>
आईचे नाव:
</label>
<label htmlFor=nanlakksa>nanlakksa</label>
</div>

<div className='box'>
<label className='title' htmlFor='email'>
ईमेल:
</label>
<label htmlFor='email'>{email}</label>
</div> */}