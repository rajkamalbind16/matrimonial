import React from "react";
import celebrationGif from './thankyou.gif';

const Thankyou = () => {
  localStorage.clear();
  return (
    <>
      <style>
        {`
          @keyframes colorGradient {
            0% {
              color: red;
            }
            33% {
              color: yellow;
            }
            66% {
              color: green;
            }
            100% {
              color: red;
            }
          }
      
          .animated-text {
            animation: colorGradient 3s infinite;
          }
        `}
      </style>
  
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${celebrationGif})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: 'none',
          position: 'relative',
          animation: 'colorGradient 3s infinite',
          color: 'red', // Initial color for the text
        }}
      >
        <button
          className="animated-text"
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
          style={{
           
            color: 'white',
            fontSize:20,
            fontWeight: 'bold',
            cursor: 'pointer',
            position: 'relative',
            right: 100,
            border: 'none',
            height: '400px',
            width: '800px',
            backgroundColor: 'transparent',
            position: 'relative',
            top: '0px',
          }}
        >
          We Hope You Like Our Work, Click Here to Return Home Page Safely
        </button>
      </div>
    </>
  );
};

export default Thankyou;






// import React from "react";
// import celebrationGif from './thankyou.gif';

// const Thankyou = () => {
//   localStorage.clear()
//   return (
//     <style>
//     @keyframes colorGradient {
//       0% {
//         color: red;
//       }
//       33% {
//         color: yellow;
//       }
//       66% {
//         color: green;
//       }
//       100% {
//         color: red;
//       }
//     }
  
//     .animated-text {
//       animation: colorGradient 3s infinite;
//     }
//   </style>
  
//   <div
//     style={{
//       width: '100%',
//       height: '100%',
//       backgroundImage: `url(${celebrationGif})`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       border: 'none',
//       position: 'relative',
//       animation: 'colorGradient 3s infinite',
//       color: 'red', // Initial color for the text
//     }}
//   >
//    <button className="animated-text" onClick={() => {localStorage.clear() ; window.location.href = "/"}}  style={{color: 'white', fontSize:15,cursor:'pointer' ,position:'relative',right:500,border:'none',height:'400px' ,width:'800px', backgroundColor:'transparent',position:'relative' ,top:'0px'  }}  >We Hope You Like Our Work , Click Here to Return Home Page Safely</button>
//     </div>
//   );
// };

// export default Thankyou;
