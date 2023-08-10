import React from 'react'
import Styles from "./horoscope.module.css"
import match from "../search/match.jpg"
const Horo = () => {
  return (
    <>
           <div className={Styles.match}>
<img height="100%" width="100%" src={match} />
<h1 className={Styles.word}> HOROSCOPE  </h1>
    </div>

    <br/>
    <br/>
    <br/>
    <div className={Styles.container}>
    <h3> view Horoscope (Gun-milan)     with other member</h3>
    <label>Your Registeration Id:<input type='text'/>
  
   {/* (E.g:MB123456,MG12345,MD1234) */}
    </label>
    
    <label>Second Registeration Id:<input type='text'/>

    </label>
    
    <label>Your Email Id:<input type='text'/>

    </label>
    <p className={Styles.code}>456713</p>
    <label>
        please Enter Above Verificaton Code:
        <input type='text' placeholder='Enter Verification Code'/>
     
        {/* <p>please enter verification code</p> */}
    </label>
    <button>Submit</button>
    </div>
    

    </>
  )
}

export default Horo