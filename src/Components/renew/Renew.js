import React from 'react'
import Styles from "./renew.module.css"
import match from ".././horo/marr.jpg"
const Renew = () => {
  return (
    <>
           <div className={Styles.match}>
<img height="100%" width="100%" src={match} />
<h1 className={Styles.word}> PROFILE RENEW  </h1>
    </div>

    <br/>
    <br/>
    <br/>
    <div className={Styles.container}>

    <label>Your Old Registraion Id:<input type='text'/>
  
   {/* (E.g:MB123456,MG12345,MD1234) */}
    </label>
    
    <label>Your Full Name :<input type='text'/>

    </label>
    <p className={Styles.code}>456713</p>
    <label>
        please Enter Above Verificaton Code:
        <input type='text' placeholder='Enter Verification Code'/>
     
        {/* <p>please enter verification code</p> */}
    </label>
    <br/>
    <br/>
    <button>Submit Form</button>
    <button>Reset Form</button>
    </div>
    

    </>
  )
}

export default Renew