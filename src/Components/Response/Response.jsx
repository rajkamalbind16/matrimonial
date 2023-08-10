import React from 'react';
import './Response.css';

const Response = () => {
    // otp random numbers 

    const generateRandomLetterString = () => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0987654321';
        let randomString = '';
    
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * letters.length);
          randomString += letters[randomIndex];
        }
    
        return randomString;
      };
    
      const randomLetterString = generateRandomLetterString();
    



  return (
    <>
    <div className='ResponseBanner'>
        <h2>Response</h2>
    </div>

    <div style={{padding:'10px'}}>
        <p>Kindly submit your registration no., required registration nos. & your registered email id to get contact details of required nos. by email alongwith Patrika Gun Milan and matching % of profiles. We are also sending your interest to them & you will get their interest by email/sms, if submitted.</p>
        <br />
        <br />
        <p>I am a member of your marriage bureau & my registration no is <input type='text' />
            Please furnish me Name & Address of following members of your bureau.

</p>
    </div>

    <div className='inputField'>
        <ol>
        <li><input type="text" /></li>
        <li><input type="text" /></li>
        <li><input type="text" /></li>
        <li><input type="text" /></li>
        <li><input type="text" /></li>
        <li><input type="text" /></li>
        <li><input type="text" /></li>
        <li><input type="text" /></li>
        <li><input type="text" /></li>
        <li><input type="text" /></li>
        </ol>

    </div>

    <div className='veritfy'>
        <p>As per our standard practice, we are providing contact details of 10 profiles in every 5 days. Please send your future enquiries accordingly.</p>


Your E-mail Address (As Mentioned In Biodata) <input type="text" name="" id="" />

<p>{randomLetterString}</p>   

<p>Please Enter Above Verification Code  <input type="text" name="" id="" /></p>


<button type='submit' className='responseBtn'>Submit Form</button>  <button type='reset' className='responseBtn'> Reset Form</button>
    </div>
    
    
    
    
    </>
  )
}

export default Response