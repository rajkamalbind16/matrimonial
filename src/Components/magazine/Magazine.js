import React,{useState} from 'react'
import match from "./marrge.jpg"
import Styles from "./magazine.module.css"

const Magazine = () => {
    const [gender, setGender] = useState('');
    const [month, setMonth] = useState('');
    const [age, setAge] = useState('');

  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Submitted:', { gender,  age,  });
    };
  return (
    <>
    <div className={Styles.match}>
<img height="100%" width="100%" src={match} />
<h1 className={Styles.word}>  Magazine</h1>
    </div>


    <br/>
    <br/>
    <h3 style={{textAlign:"center"}}>Download online Monthly magazine</h3>
    <div className={Styles.form}>
    <form className={Styles.forma} onSubmit={handleSubmit}>
      <label>
        Gender:
      
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={(e) => setGender(e.target.value)}
        />
        Male
      
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={(e) => setGender(e.target.value)}
        />
        Female
       
      </label>
      <br />

     
      <br />

   
      <label>
        Select Month:
        <select className={Styles.select} value={month} onChange={(e) => setGender(e.target.value)}>
          <option value="jaunary"> January 2023</option>
          <option value="">february 2023</option>
          <option value="">march 2023</option>
          <option value="">April 2023</option>
        </select>
      </label>
     
      <br />

    
    </form>
    </div>
    </>
  )
}

export default Magazine