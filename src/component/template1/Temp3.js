import React from 'react';
import { useNavigate } from 'react-router-dom';

import img1 from './img3.jpg';

import gj1 from '../ganesh ji/gj1.jpg'
import ff1 from '../photoFrame/ff1.jpg'
import tag3 from '../tagLine/t3.png'
import u1 from '../underline/u1.png'
import profilepic from './pp1.jpg'
import './Temp1.css'


export default function TransparentForm() {
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  
  const handleCustomize = () => {
let temp = "Temp3"

    console.log("24")
    navigate(`/form/${temp}`);
  };
  
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div  
      style={{
        width: '495px',
        height: '745px',
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
            top:-385,
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

{profilepic &&  <img
              src={profilepic}
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
              width: '100%',
              height: '400%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              position: 'absolute',
              top: 95,
              zIndex: 0,
              backgroundColor: 'transparent',
            }}
          >
              <div className='details-card'>
              <div className='box'>
                <label className='boxs' style={{position:'relative',color:'red', left:120}} >बायोडाटा</label>
                </div>
              <div className='box'>
                  <label className='title' htmlFor='name'>
                  नाव:
                  </label>
                  <label htmlFor='name'>Aman Kumar</label>
                </div>

                
                <div className='box'>
                  <label className='title' htmlFor='address'>
                  धर्म-जात:
                  </label>
                  <label htmlFor='address'>
                  Patna Bihar
                  </label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='fatherName'>
                  गोत्र:
                  </label>
                  <label htmlFor='fatherName'>Kasyapa</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  कुलदैवत:
                  </label>
                  <label htmlFor='motherName'>Mahadev</label>
                </div>

                <div className='box'>
                  <label className='title' htmlFor='email'>
                  नक्षत्र:
                  </label>
                  <label htmlFor=''>Bharani</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='name'>
                  राशी:
                  </label>
                  <label htmlFor='name'>Kanya </label>
                </div>

                <div className='box'>
                  <label className='title' htmlFor='age'>
                  गण:
                  </label>
                  <label htmlFor='age'>Human</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='religion'>
                  नाडी:
                  </label>
                  <label htmlFor='religion'>Mahdhya</label>
                </div>
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
  <label className='boxs' style={{position:'relative',color:'red', left:120}}>कौटुंबिक माहिती</label>
</div>


                <div className='box'>
                  <label className='title' htmlFor='email'>
                  वडिलांचे नाव:
                  </label>
                  <label htmlFor='email'>Rakesh Kumar</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  वडिलांचा व्यवसाय:
                  </label>
                  <label htmlFor='motherName'>Doctor</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  आईचे नाव:
                  </label>
                  <label htmlFor='motherName'>Muskan Kuamri</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  बहीण:
                  </label>
                  <label htmlFor='motherName'>Mohini</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  भाऊ:
                  </label>
                  <label htmlFor='motherName'>Suresh kumar</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  मामा:
                  </label>
                  <label htmlFor='motherName'>Ram Niwas Jholan</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  नातेसंबंध:
                  </label>
                  <label htmlFor='motherName'>abcd</label>
                </div>
                <div className='box'>
                <label className='boxs' style={{position:'relative',color:'red', left:120}}>संपर्क</label>
                </div>
                <div style={{ width:200, position:'relative', left: 50}}>
                <div className='box'>
                  <label style={{position:'relative', left:55}} className='title' htmlFor='motherName'>
                  Mansi Ram
                  </label>
                  {/* <label htmlFor='motherName'></label> */}
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  पत्ता:
                  </label>
                  <label  style={{position:'relative', right:45}} htmlFor='motherName'>Nalanda Bihar</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                  मो.नं.:
                  </label>
                  <label style={{position:'relative', right:45}}  htmlFor='motherName'>9876543210</label>
                </div>
                /</div>
              </div>
              <button style={{top:-60 , position:'relative'}} onClick={handleCustomize} className='customizeB' htmlFor='customize'>
                CUSTOMIZE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}














// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// import img3 from './img3.jpg';

// import gj1 from '../ganesh ji/gj1.jpg'
// import ff1 from '../photoFrame/ff1.jpg'
// import tag4 from '../tagLine/t4.png'
// import up from '../underline/f1up.png'
// import down from '../underline/f1down.png'
// import profilepic from './pp1.jpg';
// import './Temp1.css'

// export default function TransparentForm() {
//   const navigate = useNavigate();
//   const handleCustomize = () => {
//     let temp = "Temp2"
//     console.log("16")

//     navigate(`/form/${temp}`);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//   };


//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//       }}
//     >
//       <div
//         style={{
//           width: '400px',
//           height: '650px',
//           backgroundImage: `url(${img3})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           position: 'relative',
//         }}
//       >
//         <form
//           onSubmit={handleSubmit}
//           style={{
//             maxWidth: '500px',
//             margin: '0 auto',
//             background: 'transparent',
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//           }}
//         >
//           <div
//             className='data'
//             style={{
//               width: '100%',
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <div
//               style={{
//               top:-335,
//                 position: 'relative',
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//               }}
//             >
// {/* <img src={gj1} className='logo' alt="My Image" style={{ borderRadius: '100%', backgroundColor: 'transparent', width: '100px', height: '105px', position: 'absolute', top: '0px', right: '', zIndex: 3 }} /> */}

// <img src={up} className='u1' alt="My Image" style={{ width: '160px', height: '35px', position: 'absolute', top: '75px', zIndex: 2, backgroundColor: 'transparent' }} />

// <img src={tag4} className='tag' alt="My Image" style={{ width: '120px', height: '85px', position: 'absolute', top: '98px', zIndex: 1, backgroundColor: 'transparent' }} />

// <img src={down} className='u1' alt="My Image" style={{ width: '160px', height: '35px', position: 'absolute', top: '160px',  zIndex: 0, backgroundColor: 'transparent' }} />

// <img src={ff1} className='u1' alt="My Image" style={{ width: '120px', height: '146px',
// left:"50px", position: 'absolute', top: '185px',  zIndex: 0, backgroundColor: 'transparent' }} />

// <img src={profilepic} className='u1' alt="My Image" style={{ width: '96px', height: '124px',
// left:"62px", position: 'absolute', top: '195px',  zIndex: 0, backgroundColor: 'transparent' }} />
// </div>

//       <div className="wrapper" style={{ width: '400%', height: '400%', display: 'flex', flexDirection: 'column', alignItems: 'center',top:"50px" ,position: 'absolute', top: '190px',  zIndex: 0, backgroundColor: 'transparent'}}>
//         <div className='details-card'>
        
//         <div className="box">
//           <label className='title' htmlFor="name">Name:</label>
//           <label htmlFor="name">Ajay Das</label>
//         </div>

//         <div className="box">
//           <label className='title' htmlFor="age">Age:</label>
//           <label htmlFor="age">35</label>
//         </div>
//         <div className="box">
//           <label className='title' htmlFor="religion">Religion:</label>
//           <label htmlFor="religion">Hindu</label> 
//         </div>
//         <div className="box">
//           <label className='title' htmlFor="mob">Mobile:</label>
//           <label htmlFor="mob">8899774321</label>
//         </div>
//         <div className="box">
//           <label className='title' htmlFor="dob">Date of Birth:</label>
//           <label htmlFor="dob">23/05/1990</label>
          
//         </div>
//         <div className="box">
//           <label className='title' htmlFor="jobTitle">Job Title:</label>
//           <label htmlFor="jobTitle">Software Developer</label>
//         </div>
//         <div className="box">
//           <label className='title' htmlFor="address">Address:</label>
//           <label htmlFor="address">st.65, Road No.7,Near Gol Bazar, Nagpur(M.H.)</label>
         
//         </div>
//         <div className="box">
//           <label className='title' htmlFor="fatherName">Father's Name:</label>
//           <label htmlFor="fatherName">Jivan Das</label>
         
//         </div>
//         <div className="box">
//           <label className='title' htmlFor="motherName">Mother's Name:</label>
//           <label htmlFor="motherName">Sudha Das</label>
          
//         </div>

//         <div className="box">
//           <label className='title' htmlFor="email">Email:</label>
//           <label htmlFor="email">AjayDas@gmail.com</label> 
//         </div>
//         </div>
//         <button onClick={handleCustomize} className='customizeB3' htmlFor="customize">CUSTOMIZE</button>
//       </div>
      
//     </div>

 
//   </form>
    
//   </div>
//     </div>
//   );
// }
