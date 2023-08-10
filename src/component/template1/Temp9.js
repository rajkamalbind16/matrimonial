import React from 'react';
import img9 from './img9.jpg';
import gj1 from '../ganesh ji/gj1.jpg'
import ff1 from '../photoFrame/ff1.jpg'
import tag3 from '../tagLine/t3.png'
import u1 from '../underline/u1.png'
import profilepic from './pp1.jpg';
import './Temp1.css'

export default function TransparentForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: '400px',
          height: '650px',
          backgroundImage: `url(${img9})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <form
          onSubmit={handleSubmit}
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
              top:-335,
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
                  width: '100px',
                  height: '105px',
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
                  width: '120px',
                  height: '85px',
                  position: 'absolute',
                  top: '80px',
                  zIndex: 2,
                  backgroundColor: 'transparent',
                }}
              />

              <img
                src={tag3}
                className='tag'
                alt='My Image'
                style={{
                  width: '120px',
                  height: '85px',
                  position: 'absolute',
                  top: '100px',
                  zIndex: 1,
                  backgroundColor: 'transparent',
                }}
              />

              <img
                src={u1}
                className='u1'
                alt='My Image'
                style={{
                  width: '120px',
                  height: '85px',
                  position: 'absolute',
                  top: '120px',
                  zIndex: 0,
                  backgroundColor: 'transparent',
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

              <img
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
              />
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
                top: 180,
                zIndex: 0,
                backgroundColor: 'transparent',
              }}
            >
              <div className='details-card'>
                <div className='box'>
                  <label className='title' htmlFor='name'>
                    Name:
                  </label>
                  <label htmlFor='name'>Ajay Das</label>
                </div>

                <div className='box'>
                  <label className='title' htmlFor='age'>
                    Age:
                  </label>
                  <label htmlFor='age'>35</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='religion'>
                    Religion:
                  </label>
                  <label htmlFor='religion'>Hindu</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='mob'>
                    Mobile:
                  </label>
                  <label htmlFor='mob'>8899774321</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='dob'>
                    Date of Birth:
                  </label>
                  <label htmlFor='dob'>23/05/1990</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='jobTitle'>
                    Job Title:
                  </label>
                  <label htmlFor='jobTitle'>Software Developer</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='address'>
                    Address:
                  </label>
                  <label htmlFor='address'>
                    st.65, Road No.7, Near Gol Bazar, Nagpur(M.H.)
                  </label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='fatherName'>
                    Father's Name:
                  </label>
                  <label htmlFor='fatherName'>Jivan Das</label>
                </div>
                <div className='box'>
                  <label className='title' htmlFor='motherName'>
                    Mother's Name:
                  </label>
                  <label htmlFor='motherName'>Sudha Das</label>
                </div>

                <div className='box'>
                  <label className='title' htmlFor='email'>
                    Email:
                  </label>
                  <label htmlFor='email'>AjayDas@gmail.com</label>
                </div>
              </div>
              <button className='customizeB' htmlFor='customize'>
                CUSTOMIZE
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
