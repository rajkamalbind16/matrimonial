import React from 'react'
import match from "./match.jpg"
import Styles from "./singale.module.css"
const Singale = () => {
  return (
    <>
         <div className={Styles.match}>
<img height="100%" width="100%" src={match} />
<h1 className={Styles.word}>Singale ID SEARCH</h1>
    </div>
<div className={Styles.container}>
<label>
    Singale Registration ID Search:
    <input type='text'/>
</label>
<br/>
<br/>
<button>Go</button>
</div>
    </>
  )
}

export default Singale