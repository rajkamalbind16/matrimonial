import React,{useState}  from 'react';
import { useNavigate } from 'react-router-dom';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


// import img1 from './img1.jpg';
// import gj1 from '../ganesh ji/gj1.jpg'
// import ff1 from '../photoFrame/ff1.jpg'
// import tag3 from '../tagLine/t3.png'
// import u1 from '../underline/u1.png'
// import profilepic from './pp1.jpg';
// import './Temp1.css'

export default function Form() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      name: '',
      age: '',
      mobile: '',
      jobTitle: '',
      address: '',
      fatherName: '',
      motherName: '',
      email: '',
      religion:'',
      dob: null,
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target || event;
  
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const queryParams = new URLSearchParams(formData);
      navigate(`/CreateTemp1?${queryParams.toString()}`);
  
      console.log(formData);
      // Send data to the endpoint
      fetch('xyz-link', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle response data
          console.log(data);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    }
      
  
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
        //   backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
    <form onSubmit={handleSubmit}
          style={{
            maxWidth: '500px',
            margin: '0 auto',
            background: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
          }}
        >
          {/* <div
            className='data'
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          > */}
            {/* <div
              style={{
              top:-335,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                // src={gj1}
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
                // src={u1}
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
                // src={tag3}
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
                // src={u1}
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
                // src={ff1}
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
                // src={profilepic}
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
            </div> */}

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
              <div className="box">
          <label className="title" htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
          <label className="title" htmlFor="name">
          Religion:
          </label>
          <input
            type="text"
            name="religion"
            id="religion"
            value={formData.religion}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
          <label className="title" htmlFor="age">
            Age:
          </label>
          <input
            type="text"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
  <label className="title" htmlFor="dob">
    Date of Birth:
  </label>
  <DatePicker
    name="dob"
    id="dob"
    selected={formData.dob}
    onChange={(date) => setFormData({ ...formData, dob: date })}
    dateFormat="dd/MM/yyyy"
  />
</div>

        <div className="box">
          <label className="title" htmlFor="mobile">
            Mobile:
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
          <label className="title" htmlFor="jobTitle">
            Job Title:
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={formData.jobTitle}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
          <label className="title" htmlFor="address">
            Address:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
          <label className="title" htmlFor="fatherName">
            Father's Name:
          </label>
          <input
            type="text"
            name="fatherName"
            id="fatherName"
            value={formData.fatherName}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
          <label className="title" htmlFor="motherName">
            Mother's Name:
          </label>
          <input
            type="text"
            name="motherName"
            id="motherName"
            value={formData.motherName}
            onChange={handleInputChange}
          />
        </div>
        <div className="box">
          <label className="title" htmlFor="email">
            Email:
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="customizeB" htmlFor="customize">
          SAVE
        </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
            }