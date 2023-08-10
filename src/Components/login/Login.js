import React from 'react'
import Styles from "./login.module.css"
import match from "../search/match.jpg"
const Login = () => {
  return (
    <>
           <div className={Styles.match}>
<img height="100%" width="100%" src={match} />
<h1 className={Styles.word}>MY PROFILE LOGIN  </h1>
    </div>

    <br/>
    <br/>
    <br/>
    <div className={Styles.container}>
    <h3>To view/edit my profile related various options, Login to this option.</h3>
    <label>ID:<input type='text'/>
  
   {/* (E.g:MB123456,MG12345,MD1234) */}
    </label>
    
    <label>Email id:<input type='text'/>

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

export default Login