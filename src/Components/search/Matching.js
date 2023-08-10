import React,{useState} from 'react'
import match from "./match.jpg"
import Styles from "./match.module.css"

const Matching = () => {
    const [gender, setGender] = useState('');
    const [maritalStatus, setMaritalStatus] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [occupation, setOccupation] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Submitted:', { gender, maritalStatus, age, height, occupation });
    };
  return (
    <>
    <div className={Styles.match}>
<img height="100%" width="100%" src={match} />
<h1 className={Styles.word}>MATCHING / SIMPLE SEARCH</h1>
    </div>


    <br/>
    <br/>
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

      <label>
        Marital Status:
     
       
     
        <input
          type="radio"
          name="maritalStatus"
          value="married"
          checked={maritalStatus === 'married'}
          onChange={(e) => setMaritalStatus(e.target.value)}
        />
        Unmarried
       
        <input
          type="radio"
          name="maritalStatus"
          value="divorced"
          checked={maritalStatus === 'divorced'}
          onChange={(e) => setMaritalStatus(e.target.value)}
        />
        Divorced
       
      </label>
      <br />

      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <br />

      <label>
        Height:
        <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
      </label>
      <br />

      <label>
        Occupation:
        <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
      </label>
      <br />
      <label>
        Mangalik:
        <input type="checkbox" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
      </label>
      <br />
      <label>
        Education:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Not specific</option>
          <option value="male">Doctor</option>
          <option value="female">Engineer</option>
          <option value="other">Graduate</option>
        </select>
      </label>
      <br />
      <label>
        Occupation Place:
        <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
      </label>
      <br />
      <label>
        Native Place:
        <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} />
      </label>
      <br />

      <button type="submit">Go</button>
    </form>
    </div>
    </>
  )
}

export default Matching