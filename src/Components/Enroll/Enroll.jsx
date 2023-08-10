import React,{useState}  from 'react'
import './enroll.css';
import {FaPlus} from 'react-icons/fa';

const Enroll = () => {
    const [personal,setPersonal ] = useState(false);
    const [horoscope, setHoroscope] = useState(false);
    const [educational, setEducational] = useState(false);
    const [address, setAddress] = useState(false);
    const [family, setFamily] = useState(false);
    const [expectation, setExpectation] = useState(false);
    const [myProfile, setMyProfile] = useState(false);


    const toggleDropdown1 = () => {
        setPersonal(!personal);
    };

    const toggleDropdown2 = () => {
        setHoroscope(!horoscope);
      };

      const toggleDropdown3 = () => {
        setEducational(!educational);
      };
  
      const toggleDropdown4 = () => {
        setAddress(!address);
        };
      
          const toggleDropdown5 = () => {
            setFamily(!family);
            };

            const toggleDropdown6 = () => {
                setExpectation(!expectation);
              };
          
              const toggleDropdown7 = () => {
                setMyProfile(!myProfile);
                };



                // form submit 
                const handleFormSubmit1 = (event) => {
                  event.preventDefault();
                  // Perform any necessary form submission logic here
                  // console.log('Form submitted:');
                  // Reset the form fields
                 
                };
                const handleFormSubmit2 = (event) => {
                  event.preventDefault();
                  // Perform any necessary form submission logic here
                  // console.log('Form submitted:');
                  // Reset the form fields
                 
                };

                const handleFormSubmit3 = (event) => {
                  event.preventDefault();
                  // Perform any necessary form submission logic here
                  // console.log('Form submitted:');
                  // Reset the form fields
                 
                };

                const handleFormSubmit4 = (event) => {
                  event.preventDefault();
                  // Perform any necessary form submission logic here
                  // console.log('Form submitted:');
                  // Reset the form fields
                 
                };

                const handleFormSubmit5 = (event) => {
                  event.preventDefault();
                  // Perform any necessary form submission logic here
                  // console.log('Form submitted:');
                  // Reset the form fields
                 
                };

                const handleFormSubmit6 = (event) => {
                  event.preventDefault();
                  // Perform any necessary form submission logic here
                  // console.log('Form submitted:');
                  // Reset the form fields
                 
                };
                const handleFormSubmit7 = (event) => {
                  event.preventDefault();
                  // Perform any necessary form submission logic here
                  // console.log('Form submitted:');
                  // Reset the form fields
                 
                };



                // otpcapti
                const [number, setNumber] = useState('');

                const handleChange = (e) => {
                  const inputNumber = e.target.value;
                  setNumber(inputNumber);
                };
              
                const handleSubmit = (e) => {
                  e.preventDefault();
                  if (number.length === 6) {
                    // Perform any action with the captured 6-digit number
                    console.log('Number captured:', number);
                  } else {
                    alert('Please enter a 6-digit number.');
                  }
                };


                const generateRandomLetterString = () => {
                  const letters = '0987654321';
                  let randomStringAghori = '';
              
                  for (let i = 0; i < 6; i++) {
                    const randomIndex = Math.floor(Math.random() * letters.length);
                    randomStringAghori += letters[randomIndex];
                  }
              
                  return randomStringAghori;
                };
              
                const randomLetterString = generateRandomLetterString();
              
          
              
           
              
              
              
              
              
              
              

  
    return (
      <>
      <div>

        <div className='enrollBanner'>
            <h2>Enroll</h2>
        </div>




        <div className="dropdown-summary" onClick={toggleDropdown1}>
          <span>Personal Details</span>
          <span>{personal ? '' : <FaPlus/>}</span>
        </div>
        {personal && (
          <form action="" onSubmit={handleFormSubmit1}>
          <div className="dropdown-content">

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'><label>First Name</label> <input type="text" /></div>
              <div id='dropdownContentDivx'><label>Middle Name</label> <input type="text" /></div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'><label>Last Name</label><input type="text" /></div>
              <div id='dropdownContentDivx'><label>DOB</label><input type="date" /></div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'> SubCast: <input type="text" /></div>
              <div id='dropdownContentDivx'>Mariail Status:
                      <select>
                          <option>Unmarried</option>
                          <option>Married</option>
                          <option value="">Divorcee Boy</option>
                          <option value="">Divorcee Girl</option>

                      </select>
              </div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
                <label htmlFor="">Height</label>
                     <div>
                     <select>
                          <option>4</option>           
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                  
                      </select>

                      <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                      </select>
                     </div>
              
              </div>
              <div id='dropdownContentDivx'>
                        Weight :
                    <select>
                      <option>50KG</option>
                      <option>51KG</option>
                      <option>52KG</option>
                      <option>53KG</option>
                      <option>54KG</option>    
                      <option>55KG</option>
                      <option>56KG</option>
                      <option>57KG</option>
                      <option>58KG</option>
                      <option value="">59KG</option>
                      <option value="">60KG</option>
                      <option>61KG</option>
                      <option>62KG</option>
                      <option>63KG</option>
                      <option>64KG</option>    
                      <option>65KG</option>
                      <option>66KG</option>
                      <option>67KG</option>
                      <option>68KG</option>
                      <option value="">69KG</option>
                      <option value="">70KG</option>
                  </select>              
              </div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
                          Blood Group :
                      <select>
                        <option>A+</option>
                        <option>A-</option> 
                        <option>AB+</option> 
                        <option>AB-</option> 
                        <option>B+</option>
                        <option>B-</option>
                        <option>O+</option> 
                        <option>O-</option> 
                    </select>

              </div>
              <div id='dropdownContentDivx'>
              Complexion :
              <select id="complexion">
  <option value="">Select complexion</option>
  <option value="fair">Fair</option>
  <option value="medium">Medium</option>
  <option value="olive">Olive</option>
  <option value="dark">Dark</option>
  <option value="deep">Deep</option>
</select>              
              </div>            
            </div>


            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
                          Physical Disablities :
                      <select>
                        <option>Yes</option>
                        <option>No</option>

                    </select>
              </div>
              <div id='dropdownContentDivx'>
                        Diet :
                  <select>
                      <option>N/a</option>
                      <option>Veg</option>
                      <option>Non-Veg</option>
                  </select>
              
              </div>            
            </div>

             <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
               Spectacles :
                  <select>
                  <option>Yes</option>
                  <option>No</option>
                 </select>
              </div>
              <div id='dropdownContentDivx'>
                                Lens :
                        <select>
                        <option>Yes</option>
                        <option>No</option>
                          </select>              
              </div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>Personality : <input type="text" /></div>
              <div id='dropdownContentDivx'> </div>

            </div>
            <div id='DivformSubmit'>
            <button id='formSubmit' type='Submit'>Next</button>

            </div>

          </div>
          </form>
        )}
        <div className="dropdown-summary" onClick={toggleDropdown2}>
          <span>Horoscope Details</span>
          <span>{horoscope ? '' : <FaPlus/>}</span>
        </div>
        {horoscope && (
                    <form action="" onSubmit={handleFormSubmit2}>
          <div className="dropdown-content">


            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
                
              Rashi :<select>
            <option>मेष – Aries</option>
            <option>वृषभ – Taurus</option>
            <option>मिथुन – Gemini</option>
            <option>कर्क – Cancer</option>
            <option>सिंह – Leo</option>
            <option>कन्या – Virgo</option>
            <option>तुला – Libra</option>
            <option>वृश्चिक – Scorpius</option>
            <option>धनु – Sagittarius</option>
            <option>मकर – Capricornus</option>
            <option>कुंभ – Aquarius</option> 
            <option>मीन – Pisces</option>

         </select>
              
              </div>
              <div id='dropdownContentDivx'>              
Nakshatra :<select>
<option>Ashwini (अश्विनि)</option>
<option>Bharani (भरणी)</option>
<option>Krittika (कृत्तिका)</option>
<option>Rohini (रोहिणी)</option>
<option>Mrigashīrsha (मृगशीर्ष)</option>
<option>Ārdrā (आर्द्रा)</option>
<option>Punarvasu (पुनर्वसु)</option>
<option>Pushya (पुष्य)</option>
<option>Āshleshā (अश्लेषा)</option>
<option>Maghā (मघा)</option>
<option>Pūrva or Pūrva Phalgunī (पूर्व फल्गुनी)</option>
<option>Uttara or Uttara Phalgunī (उत्तर फल्गुनी)</option>
<option>Hasta (हस्त)</option>
<option>Chitra (चित्रा)</option>
<option>Svātī (स्वाति)</option>
<option>Viśākhā (विशाखा)</option>
<option>Anurādhā (अनुराधा)</option>
<option>Jyeshtha (ज्येष्ठा)</option>
<option>Mula (मूल)</option>
<option>Pūrva Āshādhā (पूर्व आषाढ़)</option>
<option>Uttara Āṣāḍhā (उत्तर आषाढ़)</option>
<option>Śrāvaṇa (श्र‌ावण)</option>
<option>Śrāviṣṭha (श्रविष्ठा) or Dhanishta</option>
<option>Shatabhisha (शतभिषा) or Śatataraka</option>
<option>Pūrva Bhādrapadā (पूर्व भाद्रपद)</option>
<option>Uttara Bhādrapadā (उत्तर भाद्रपद)</option>
<option>Revati (रेवती)</option>

         </select>
              </div>            
            </div>


            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
Charan :<select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
         </select>

              </div>
              <div id='dropdownContentDivx'>             
Nadi :<select>
            <option>Unspecified</option>
            <option>Adhya</option>
            <option>Madhya</option>
            <option>Antya</option>
         </select>
                </div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
                  
Gan :<select>
            <option>Unspecified</option>
            <option>Dev Gan</option>
            <option>Manushya Gan</option>
            <option>Rakshas Gan</option>
            <option> Aghori</option>

         </select>
              </div>
              <div id='dropdownContentDivx'>
                
Mangal :<select>
            <option>Yes</option>
            <option>No</option>
            <option>Saumya</option>
            <option>Nirdosh</option>
            <option>Not Known</option>

         </select>
                </div>            
            </div>


            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>*Birth Time (Its important) :<input type='time' /></div>
              <div id='dropdownContentDivx'>Devak :<input type='text' /></div>            
            </div>
<div id='DivformSubmit'>
<button id='formSubmit' type='Submit'>Next</button>

</div>
          </div>
          </form>
        )}

        <div className="dropdown-summary" onClick={toggleDropdown3}>
          <span>Educational / Professional Details </span>
          <span>{educational ? '' : <FaPlus/>}</span>
        </div>
        {educational && (
          <form action="" onSubmit={handleFormSubmit3}>
          <div className="dropdown-content">
          <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
              Education Area :<select>
            <option>12th to Graduate</option>
            <option value="">Post Graduate</option>
            <option value="">Doctor</option>
            <option value="">Engineer / PG Engg</option>
         </select>
              </div>
              <div id='dropdownContentDivx'>Education: <input type="text" /></div>            
            </div>


            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
              *Occupation Type (Its important) :<select>
            <option value="">No Service or Pursuing Edu</option>
            <option value="">Private Services</option>
            <option value="">Own Business or Own Practice</option>
            <option value="">Government Service</option>


         </select>              
              </div>
              <div id='dropdownContentDivx'>Occupation Details  <input type="text" /></div>            
            </div>

            
            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
              *Working in City/Country (Its important)
              <select id="city">
  <option value="">Select city</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Delhi">Delhi</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Chennai">Chennai</option>
  <option value="Kolkata">Kolkata</option>
  <option value="Ahmedabad">Ahmedabad</option>
  <option value="Pune">Pune</option>
  <option value="Jaipur">Jaipur</option>
  <option value="Surat">Surat</option>
  <option value="Lucknow">Lucknow</option>
  <option value="Kanpur">Kanpur</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Patna">Patna</option>
  <option value="Indore">Indore</option>
  <option value="Bhopal">Bhopal</option>
  <option value="Vadodara">Vadodara</option>
  <option value="Coimbatore">Coimbatore</option>
  <option value="Kochi">Kochi</option>
  <option value="Visakhapatnam">Visakhapatnam</option>
</select>
              
              </div>
              <div id='dropdownContentDivx'>Income  <input type="text" /></div> 
            </div>
<div id='DivformSubmit'>
<button id='formSubmit' type='Submit'>Next</button>           

</div>


          </div> </form>
        )}
        <div className="dropdown-summary" onClick={toggleDropdown4}>
          <span>Address </span>
          <span>{address ? '' : <FaPlus/>}</span>
        </div>
        {address && (

<form action="" onSubmit={handleFormSubmit4}>
          <div className="dropdown-content">



          <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
              PAN / Adhar / Driving License / Passport No :<input type='text' />
              </div>
              <div id='dropdownContentDivx'>
              Residence Address With City :<textarea type='text' />
            </div>
            </div>

            
            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
              *E-mail ID (Its important) :<input type='email' />
                </div>
              <div id='dropdownContentDivx'>
              *Mobile For SMS Alert (Its important) :<input type='tel' />
                </div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>Mobile II :<input type='tel' /></div>
              <div id='dropdownContentDivx'>Phone I :<input type='tel' /></div>            
            </div>


            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>Phone II :<input type='tel' /></div>
              <div id='dropdownContentDivx'></div>            
            </div>

<div id='DivformSubmit'>
<button id='formSubmit' type='Submit'>Next</button>

</div>
          </div>
        </form>
        )}

        <div className="dropdown-summary" onClick={toggleDropdown5}>
          <span> Family Background</span>
          <span>{family ? '' : <FaPlus/>}</span>
        </div>
        {family && (

<form action="" onSubmit={handleFormSubmit5}>
          <div className="dropdown-content">


<div className="dropdownContentDiv">
              <div id='dropdownContentDivx'> 
                Father: 
                <select>
            <option>Yes</option>
            <option>No</option>
         </select>
                </div>

                <div id='dropdownContentDivx'> 
                Mother: 
                <select>
            <option>Yes</option>
            <option>No</option>
         </select>
                </div>
            </div>


            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
                Brother
                <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                      </select>

              </div>
              <div id='dropdownContentDivx'>Brother Married

              <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                      </select>
              </div>

            </div>


            <div className="dropdownContentDiv">
            <div id='dropdownContentDivx'>Sister
            <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                      </select>
            </div>
              <div id='dropdownContentDivx'>Sister Married
              <select>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                          <option>8</option>
                          <option>9</option>
                          <option>10</option>
                          <option>11</option>
                      </select>
                </div>          
            </div>

            
            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>Parents Fullname :<input type='text' /></div>
              <div id='dropdownContentDivx'>Parents Occupation :<input type='text' /></div>            
            </div>



            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>Parents Resident City :<input type='text' /></div>
              <div id='dropdownContentDivx'>
              Surnames of Relatives :<input type='text' />
                </div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>Family Wealth (e.g. Flat, Agri land.....etc) :<input type='text' />
</div>
              <div id='dropdownContentDivx'>Mama’s Surname / Place :<input type='text' />
</div>            
            </div>






            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
              *Native District (Its important) 
              <select id="city">
  <option value="">Select city</option>
  <option value="Mumbai">Mumbai</option>
  <option value="Delhi">Delhi</option>
  <option value="Bangalore">Bangalore</option>
  <option value="Hyderabad">Hyderabad</option>
  <option value="Chennai">Chennai</option>
  <option value="Kolkata">Kolkata</option>
  <option value="Ahmedabad">Ahmedabad</option>
  <option value="Pune">Pune</option>
  <option value="Jaipur">Jaipur</option>
  <option value="Surat">Surat</option>
  <option value="Lucknow">Lucknow</option>
  <option value="Kanpur">Kanpur</option>
  <option value="Nagpur">Nagpur</option>
  <option value="Patna">Patna</option>
  <option value="Indore">Indore</option>
  <option value="Bhopal">Bhopal</option>
  <option value="Vadodara">Vadodara</option>
  <option value="Coimbatore">Coimbatore</option>
  <option value="Kochi">Kochi</option>
  <option value="Visakhapatnam">Visakhapatnam</option>
</select>
              </div>
              <div id='dropdownContentDivx'>Native Taluka, If Any :<input type='text' />
</div>            
            </div>

            
            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
Any Intercast Marriage in Core Family :<select>
            <option>Yes</option>
            <option>No</option>
         </select>
            </div>
              <div id='dropdownContentDivx'>If yes (Relation/Caste) :<input type='text' />
</div>          

            </div>
            <div id='DivformSubmit'>
<button id='formSubmit' type='Submit'>Next</button>
</div> 
          </div>
          </form>
        )}
        <div className="dropdown-summary" onClick={toggleDropdown6}>
          <span>Expectation </span>
          <span>{expectation ? '' : <FaPlus/>}</span>
        </div>
        {expectation && (

<form action="" onSubmit={handleFormSubmit6}>
          <div className="dropdown-content">

<div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>Preferred Cities :<input type='text' />
</div>
              <div id='dropdownContentDivx'>Mangal :<select>
            <option>Yes</option>
            <option>No</option>
            <option>Saumya</option>
            <option>Nirdosh</option>
            <option>Not Known</option>

         </select></div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>Expected Caste 
              <select>
            <option>Maratha</option>
            <option>Deshmukh</option>
            <option>96 Kuli</option>
            <option>Kunbi</option>
            <option>Tirale Kunbi</option>

         </select></div>
              <div id='dropdownContentDivx'>Max Age Difference :<select>
<option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>10+</option>
         </select></div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>
                <label htmlFor="">Expected Height</label>

                <div>
                <select>
            <option>4</option>           
            <option>5</option>
            <option>6</option>
            <option>7</option>
         </select>

         <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
         </select>
                </div>
             
         </div>
              <div id='dropdownContentDivx'>Expected Education :<textarea typeof='text' />
</div>            
            </div>

            <div className="dropdownContentDiv">
              <div id='dropdownContentDivx'>Expected Occupation & Income per Annum :<textarea typeof='text' />
</div>
              <div id='dropdownContentDivx'>
                <label htmlFor="">Divorcee</label> Yes<input type="radio" name="" id="" />No <input type="radio" name="" id="" />
</div>            
            </div>

            <div className="dropdownContentDi">
              <div>Security Check <br />
              <br />
              <p>{randomLetterString}</p>   


Please Enter Above Verification Code <br /><br />  <div onSubmit={handleSubmit}>
        <input
          type="text"
          value={number}
          onChange={handleChange}
          placeholder="Enter a 6-digit number"
        />
        <button type="submit" id='verrfy'>Verify</button>
      </div></div>
              <div></div>            
            </div>

* Please enter verification code then click submit
<div id='DivformSubmit'>
<button id='formSubmit' type='Submit'>Next</button>

</div>
          </div>


          </form>
        )}

        <div className="dropdown-summary" onClick={toggleDropdown7}>
          <span>Profile Photos </span>
          <span>{myProfile ? '' : <FaPlus/>}</span>
        </div>
        {myProfile && (
          <form action="" onSubmit={handleFormSubmit7}>

          <div className="dropdown-content">

<div className="dropdownContentDi">
              <div>
              * Kindly bring cropping lines on photo at proper position and then click on submit. <br /><br />

              Upload your first profile picture (Close-up preferred) <br /> <br />   <input type="file" name="" id="" />


              </div>
              <div> Upload your second profile picture, if intrested <br /><br />    <input type="file" name="" id="" />
              <br /><br />You can also submit your photos after getting registration number through photo edit option.

</div>    

<div id='DivformSubmit' >
<button id='formSubmit' type='Submit'>Submit</button>

</div>
            </div>

           
 

 

          </div>
          </form>
        )}
       
      </div>
  
      

      </>
    )
}

export default Enroll