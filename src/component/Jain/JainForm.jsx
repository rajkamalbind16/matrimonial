import React from 'react';
import { useState } from 'react';

import { useNavigate ,useParams } from 'react-router-dom';

import './JainForm.css';

const Jainform = () => {

  const navigate = useNavigate();

  const { temp } = useParams();

  const [formValuess, setformValuess] = useState({
    greetGod: '|| जय जिनेन्द्र ||',
    weight:'',
    formatType: '',
    MarriStatus:"",
    title: '',
    sharirikApangta:"",
    name: '',
    dob: '',
    selectedDate: '',
    selectedMonth: '',
    selectedYear: '',

    dobDayName: '',
    dobDay: '',
    birthPlace:'',
navsarNav:'',
janamNav:'',

religion:'',
kuldevta:'',
gotra:'',
dewak:'',
naksatra:'',
rashii:'',
gann:'',
naadi:'',
height:'',
varn:'',
bloodGroupInput:'',
yateAathiraktaSirsak:'',
yateAathiraktaSirsakTitle:'',
job:'',
salary:'',
yateAathirakta2:'',
yateAathiraktaSirsakTitle2:'',
koutumbikMahiti:'',
vadilchaleNav:'',
vadilachanWayasha:'',
aayicheNav:'',
bahin:'',
bhau:'',
mama:'',
study:'',
natoSamband:'',
karuSaktaTitle1:'',
karuSaktaTitle2:'',
karuSaktaTitle3:'',
karuSaktaTitle4:'',
karuSakta1:'',
karuSakta2:'',
karuSakta3:'',
karuSakta4:'',
aapesha:'',
addressLine1:'',
addressLineTitle2:'',
addressLine2:'',
mob_no:'',
pic:'',
  });

   
  function savePhotoToLocalStorage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = function() {
      // Save the photo in local storage
      localStorage.setItem('photo', reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValuess((prevValues) => ({ ...prevValues, [name]: value }));
  };

console.log("85")
console.log(formValuess)
 
const handleSubmit = (event) => {
  event.preventDefault();
  console.log( temp)
  const queryParams = new URLSearchParams(formValuess);
 if(temp == "JTemp1"){ console.log("true"), navigate(`/CreateJTemp1?${queryParams.toString()}`);}
 if(temp == "JTemp2"){ console.log("true"), navigate(`/CreateJTemp2?${queryParams.toString()}`);}
 if(temp == "JTemp3"){ console.log("true"), navigate(`/CreateJTemp3?${queryParams.toString()}`);}
 if(temp == "JTemp4"){ console.log("true"), navigate(`/CreateJTemp4?${queryParams.toString()}`);}
 if(temp == "JTemp5"){ console.log("true"), navigate(`/CreateJTemp5?${queryParams.toString()}`);}

  console.log(formValuess);
  // Send data to the endpoint
  fetch('xyz-link', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formValuess),
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
    <>
    <form onSubmit={handleSubmit}>
    <div className='mainFormssss'>
        <label></label>
        <select
          value={formValuess.greetGod}
          onChange={handleChange}
          name='greetGod'
          style={{
            fontSize: '20px',
            paddingRight: '20px',
            paddingLeft: '20px',
          }}


        >
          <option value=" || जय जिनेन्द्र ||"> || जय जिनेन्द्र ||</option>
       
      </select>
      <br />
        <br />

        <label></label>
        <select
          value={formValuess.formatType}
          onChange={handleChange}
          name='formatType'
          style={{
            fontSize: '20px',
            paddingRight: '20px',
            paddingLeft: '20px',
          }}
        >
          <option value='बायोडाटा'>कोई आयु चुनें</option>
          <option value='बायोडाटा'>बायोडाटा</option>
          <option value='परिचय पत्र'>परिचय पत्र</option>
          <option value='वैयक्तिक माहिती'>वैयक्तिक माहिती</option>
        </select>
        <br />
        <br />

        <div
          style={{ display: 'flex', justifyContent: 'space-around' }}
          className='navJanamTarikh'
        >
          <div>
            <label>
              <select
                value={formValuess.title}
                onChange={handleChange}
                required
                name='title'
                style={{
                  fontSize: '20px',
                  paddingRight: '10px',
                  paddingLeft: '10px',
                }}
              >
                <option value='नाव'>नाव</option>
                <option value='मुलाचे नाव'>मुलाचे नाव</option>
              </select>
              <br />
              <input
                type='text'
                value={formValuess.name}
                placeholder={formValuess.title}
                onChange={handleChange}
                required
                name='name'
              />
            </label>
          </div>


          <div>
            <select
              value={formValuess.dob}
              onChange={handleChange}
              required
              name='dob'
              style={{
                fontSize: '20px',
                paddingRight: '40px',
                paddingLeft: '40px',
              }}
            >
              <option value='जन्मतारीख'>जन्मतारीख</option>
              <option value='जन्मदिनांक '> जन्मदिनांक</option>
            </select>
            <br />

            <select
              value={formValuess.selectedDate}
              onChange={handleChange}
              required
              name='selectedDate'
              style={{fontSize:'20px',
    paddingRight:'40px',paddingLeft:'40px'
    }}>
        <option value="">तारीख चुनें</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>

      </select>

      <select value={formValuess.selectedMonth} name='selectedMonth' onChange={handleChange} style={{fontSize:'20px',
    paddingRight:'40px',paddingLeft:'40px'
    }}>
        <option value="">माह चुनें</option>
        <option value="जनवरी">जनवरी</option>
        <option value="फरवरी">फरवरी</option>
        <option value="मार्च">मार्च</option>
        <option value="अप्रैल">अप्रैल</option>
        <option value="मई">मई</option>
        <option value="जून">जून</option>
        <option value="जुलाई">जुलाई</option>
        <option value="अगस्त">अगस्त</option>
        <option value="सितंबर">सितंबर</option>
        <option value="अक्टूबर">अक्टूबर</option>
        <option value="नवंबर">नवंबर</option>
        <option value="दिसंबर">दिसंबर</option>
      </select>

      <select value={formValuess.selectedYear} name='selectedYear' onChange={handleChange} style={{fontSize:'20px',
    paddingRight:'40px',paddingLeft:'40px'
    }}>
        <option value="">वर्ष चुनें</option>
        <option value="1961">1961</option>
<option value="1962">1962</option>
<option value="1963">1963</option>
<option value="1964">1964</option>
<option value="1965">1965</option>
<option value="1966">1966</option>
<option value="1967">1967</option>
<option value="1968">1968</option>
<option value="1969">1969</option>
<option value="1970">1970</option>
<option value="1971">1971</option>
<option value="1972">1972</option>
<option value="1973">1973</option>
<option value="1974">1974</option>
<option value="1975">1975</option>
<option value="1976">1976</option>
<option value="1977">1977</option>
<option value="1978">1978</option>
<option value="1979">1979</option>
<option value="1980">1980</option>
<option value="1981">1981</option>
<option value="1982">1982</option>
<option value="1983">1983</option>
<option value="1984">1984</option>
<option value="1985">1985</option>
<option value="1986">1986</option>
<option value="1987">1987</option>
<option value="1988">1988</option>
<option value="1989">1989</option>
<option value="1990">1990</option>
<option value="1991">1991</option>
<option value="1992">1992</option>
<option value="1993">1993</option>
<option value="1994">1994</option>
<option value="1995">1995</option>
<option value="1996">1996</option>
<option value="1997">1997</option>
<option value="1998">1998</option>
<option value="1999">1999</option>
<option value="2000">2000</option>
<option value="2001">2001</option>
<option value="2002">2002</option>
<option value="2003">2003</option>
<option value="2004">2004</option>
<option value="2005">2005</option>
<option value="2006">2006</option>
<option value="2007">2007</option>
<option value="2008">2008</option>
<option value="2009">2009</option>
<option value="2010">2010</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
<option value="2014">2014</option>
<option value="2015">2015</option>
<option value="2016">2016</option>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
<option value="2020">2020</option>
<option value="2021">2021</option>
<option value="2022">2022</option>
<option value="2023">2023</option>
        {/* Add more year options as needed */}
      </select>

    

      
      
    </div>
</div>

    <br />

    <div style={{display:'flex',justifyContent:'space-around'}} className='dobjanamsthan'>
        
    <div>
           <select value={formValuess.dobDay} name='dobDay' onChange={handleChange} style={{fontSize:'20px',
    paddingRight:'20px',paddingLeft:'20px'
    }}>
                <option value="जन्म वेळ">जन्म वेळ </option>
                <option value="जन्म वार">जन्म वार</option>
                <option value="जन्म वेळ">जन्म वेळ</option>
            </select> <br />
            <input
            type="text"
            value={formValuess.dobDayName}
            name='dobDayName'
            placeholder={formValuess.dobDay}
            onChange={handleChange}
            required
          />
           </div>
    

      
            <div>
          <label>जन्म स्थळ:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
            <br />
        <input
            type="text"
            value={formValuess.birthPlace}
            name='birthPlace'
            placeholder='जन्म स्थळ'
            onChange={handleChange}
            required
          />
          </div>



       <div>
       <label>शारीरिक अपंगत्व:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.sharirikApangta}
            name='sharirikApangta'
            placeholder='शारीरिक अपंगत्व'
            onChange={handleChange}
            required
          />
       </div>


       <div>
       <label>वैवाहिक स्थिती:</label>
    
        <br />

        <input
            type="text"
            value={formValuess.MarriStatus}
            name='MarriStatus'
            placeholder='MarriStatus'
            onChange={handleChange}
            required
          />
       </div>



       <div>
       <label>धर्म-जात:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.religion}
            name='religion'
            placeholder='धर्म-जात'
            onChange={handleChange}
            required
          />
       </div>


    </div> <br />



 

    <div style={{display:'flex',justifyContent:'space-around'}} className='rashiGunn'>
        
      


       <div>
       <label>ऊंची:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.height}
            name='height'
            placeholder='ऊंची'
            onChange={handleChange}
 //             required
          />
       </div>


       <div>
       <label>वर्ण:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.varn}
            name='varn'
            placeholder='वर्ण'
            onChange={handleChange}
     //         required
          />
       </div>


       <div>
       <label>रक्तगट:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.bloodGroupInput}
            name='bloodGroupInput'
            placeholder='रक्तगट'
            onChange={handleChange}
         //     required
          />
       </div>
    </div> <br />


    <div style={{display:'flex',justifyContent:'space-around'}} className='nokriii'> 
    

       <div>
       <label>वेतन/उत्पन्न:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.salary}
            name='salary'
            placeholder='(Optional) वेतन/उत्पन्न'
            onChange={handleChange}
             // required
          />
       </div>
       <div>
       <label>शिक्षण:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.study}
            name='yateAathiraktaSirsak'
            placeholder='शिक्षण'
            onChange={handleChange}
 //             required
          />
       </div>
       <div>
       <label>नोकरी/व्यवसाय:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.job}
            name='job'
            placeholder='(Optional) कंपनी किंवा व्यवसायाचे नाव, पोस्ट'
            onChange={handleChange}
     //         required
          />
       </div>

    </div> <br />
    <div>
       <label>वजन:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.weight}
            name='weight'
            placeholder='वजन'
            onChange={handleChange}
         //     required
          />
       </div>
       


    <div style={{display:'flex',justifyContent:'space-around'}} className='peeshhaa'> 
    <div>
       {/* <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label> */}
       <input className='extraAdd'
            type="text"
            value={formValuess.yateAathiraktaSirsakTitle}
            name='yateAathiraktaSirsakTitle'
            placeholder='येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:'
            onChange={handleChange}
          />
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input 
            type="text"
            value={formValuess.yateAathiraktaSirsak}
            name='yateAathiraktaSirsak'
            placeholder='शिक्षण'
            onChange={handleChange}
          />
       </div>

       <div>
       {/* <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label> */}
       <input className='extraAdd'
            type="text"
            value={formValuess.yateAathiraktaSirsakTitle2}
            name='yateAathiraktaSirsakTitle2'
            placeholder='येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:'
            onChange={handleChange}
          />
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.yateAathirakta2}
            placeholder='शिक्षण'
            name='yateAathirakta2'
            onChange={handleChange}
          />
       </div>
    </div> <br />
      

    <div>
      <select value={formValuess.koutumbikMahiti}
      name='koutumbikMahiti'
       onChange={handleChange}
       style={{
        fontSize: '20px',
        paddingRight: '20px',
        paddingLeft: '20px',
      }}
       >
        <option value="कौटुंबिक माहिती">कौटुंबिक माहिती</option>
      
      </select>

      </div>
      <br />

    <div className='mygrtiddd'>
    <div>
       <label>वडिलांचे नाव:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.vadilchaleNav}
            name='vadilchaleNav'
            placeholder=' वडिलांचे संपूर्ण नाव'
            onChange={handleChange}
            //  required
          />
       </div>



       <div>
       <label>वडिलांचा व्यवसाय:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.vadilachanWayasha}
            placeholder='वडिलांचा व्यवसाय किंवा नोकरी'
            onChange={handleChange}
             // required
            name='vadilachanWayasha'
          />
       </div>




       <div>
       <label>आईचे नाव:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.aayicheNav}
            placeholder='आईचे संपूर्ण नाव'
            onChange={handleChange}
             // required
            name='aayicheNav'
          />
       </div>




       <div>
       <label>बहीण:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.bahin}
            placeholder='1 बहीण विवाहित'
            onChange={handleChange}
            //  required
            name='bahin'
          />
       </div>




       <div>
       <label>भाऊ:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.bhau}
            placeholder='2 भाऊ/1 विवाहित'
            onChange={handleChange}
            //  required
            name='bhau'
          />
       </div>



       <div>
       <label>मामा:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.mama}
            name='mama'
            placeholder='मामाचे नाव/आजोळ'
            onChange={handleChange}
             // required
          />
       </div>


       <div>
       <label>नातेसंबंध:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.natoSamband}
            name='natoSamband'
            placeholder='नातेवाईकांची आडनावे'
            onChange={handleChange}
            //  required
          />
       </div>





       <div>
       {/* <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label> */}
       <input className='extraAdd'
            type="text"
            value={formValuess.karuSaktaTitle1}
            placeholder='येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:'
            onChange={handleChange}
            name='karuSaktaTitle1'
          />
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input 
            type="text"
            value={formValuess.karuSakta1}
            placeholder=''
            onChange={handleChange}
            name='karuSakta1'
          />
       </div>


       <div> 
       <input className='extraAdd'
            type="text"
            value={formValuess.karuSaktaTitle2}
            placeholder='येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:'
            onChange={handleChange}
            name='karuSaktaTitle2'
          />
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.karuSakta2}
            placeholder=''
            onChange={handleChange}
            name='karuSakta2'
          />
       </div>


       <div>
       <input className='extraAdd'
            type="text"
            value={formValuess.karuSaktaTitle3}
            placeholder='येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:'
            onChange={handleChange}
            name='karuSaktaTitle3'
          />
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.karuSakta3}
            placeholder=''
            onChange={handleChange}
            name='karuSakta3'
          />
       </div>


       
       <div>
       <input className='extraAdd'
            type="text"
            value={formValuess.karuSaktaTitle4}
            placeholder='येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:'
            onChange={handleChange}
            name='karuSaktaTitle4'
          />
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.karuSakta4}
            placeholder=''
            onChange={handleChange}
            name='karuSakta4'
          />
       </div>


       
       <div>
       <label>अपेक्षा:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.aapesha}
            placeholder='अपेक्षा'
            onChange={handleChange}
            //  required
            name='aapesha'
          />
       </div>
    </div>
    <br />


       <label>संपर्क</label>
      {/* <select value={selectedYear} onChange={handleYearChange}>
        <option value="">वर्ष चुनें</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        {/* Add more year options as needed */}
      {/* </select> */}

    <div style={{display:'flex',justifyContent:'space-around'}} className='addressss'>
        
      <div>
       <label>पत्ता:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.addressLine1}
            placeholder='Address Line 1'
            onChange={handleChange}
          //    required
            name='addressLine1'
          />
       </div>

       <div>
       {/* <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label> */}
       <input className='extraAdd'
            type="text"
            value={formValuess.addressLineTitle2}
            placeholder='येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:'
            onChange={handleChange}
            
            name='addressLineTitle2'
          />
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.addressLine2}
            placeholder='Address Line 2 (Optional)'
            onChange={handleChange}
            
            name='addressLine2'
          />
       </div>

       <div>
       <label>मो.नं.:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValuess.mob_no}
            placeholder='संपर्कासाठी मोबाईल नंबर'
            onChange={handleChange}
            //  required
            name="mob_no"
          />
       </div>

    </div>
    <br />


    <div>
       <label>फोटो:</label> <br />
       <input
            type="file"
            value={formValuess.pic}
            placeholder=''
            name="pic"
            onChange={savePhotoToLocalStorage}
            //  required
          />
       </div>

       <br />
       <button id='btnnn'>Create Biodata</button>

     
    </div> 
    
    
    
    </form>
    </>
  )
}

export default Jainform





// import React from 'react';
// import { useState } from 'react';
// import './JainForm.css'

// const JainForm = () => {

//   const [formJainValues, setformJainValues] = useState({
//     greetGod: '',
//     formatType: '',
//     title: '',
//     name: '',
//     dob: '',
//     selectedDate: '',
//     selectedMonth: '',
//     selectedYear: '',
//     dobDayName: '',
//     dobDay: '',
//     birthPlace:'',
// navsarNav:'',
// janamNav:'',
// religion:'',
// kuldevta:'',
// gotra:'',
// dewak:'',
// naksatra:'',
// rashii:'',
// gann:'',
// naadi:'',
// height:'',
// varn:'',
// bloodGroupInput:'',
// yateAathiraktaSirsak:'',
// job:'',
// salary:'',
// yateAathirakta:'',
// koutumbikMahiti:'',
// vadilchaleNav:'',
// vadilachanWayasha:'',
// aayicheNav:'',
// bahin:'',
// bhau:'',
// mama:'',
// natoSamband:'',
// karuSakta1:'',
// karuSakta2:'',
// karuSakta3:'',
// karuSakta4:'',
// aapesha:'',
// addressLine1:'',
// addressLine2:'',
// mob_no:'',
// pic:'',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setformJainValues((prevValues) => ({ ...prevValues, [name]: value }));
//   };




// console.warn(formJainValues);
 


//   return (
//     <>
//     <div className='mainFormJain'>
//         <label></label>
//         <select
//           value={formJainValues.greetGod}
//           onChange={handleChange}
//           name='greetGod'
//           style={{
//             fontSize: '20px',
//             paddingRight: '20px',
//             paddingLeft: '20px',
//           }}
//         >
//         <option value=" || जय जिनेन्द्र ||"> || जय जिनेन्द्र ||</option>
      
//       </select>
//       <br />
//         <br />

//         <label></label>
//         <select
//           value={formJainValues.formatType}
//           onChange={handleChange}
//           name='formatType'
//           style={{
//             fontSize: '20px',
//             paddingRight: '20px',
//             paddingLeft: '20px',
//           }}
//         >
//           <option value=''>कोई आयु चुनें</option>
//           <option value='type1'>बायोडाटा</option>
//           <option value='type2'>परिचय पत्र</option>
//           <option value='type3'>वैयक्तिक माहिती</option>
//         </select>
//         <br />
//         <br />

//         <div
//           style={{ display: 'flex', justifyContent: 'space-around' }}
//           className='navJanamTarikh'
//         >
//           <div>
//             <label>
//               <select
//                 value={formJainValues.title}
//                 onChange={handleChange}
//                 name='title'
//                 style={{
//                   fontSize: '20px',
//                   paddingRight: '10px',
//                   paddingLeft: '10px',
//                 }}
//               >
//                 <option value='नाव'>नाव</option>
//                 <option value='मुलाचे नाव'>मुलाचे नाव</option>
//               </select>
//               <br />
//               <input
//                 type='text'
//                 value={formJainValues.name}
//                 placeholder={formJainValues.title}
//                 onChange={handleChange}
//                 name='name'
//               />
//             </label>
//           </div>


//           <div>
//             <select
//               value={formJainValues.dob}
//               onChange={handleChange}
//               name='dob'
//               style={{
//                 fontSize: '20px',
//                 paddingRight: '40px',
//                 paddingLeft: '40px',
//               }}
//             >
//               <option value='जन्मतारीख'>जन्मतारीख</option>
//               <option value='जन्मदिनांक '> जन्मदिनांक</option>
//             </select>
//             <br />

//             <select
//               value={formJainValues.selectedDate}
//               onChange={handleChange}
//               name='selectedDate'
//               style={{fontSize:'20px',
//     paddingRight:'40px',paddingLeft:'40px'
//     }}>
//         <option value="">तारीख चुनें</option>
//         <option value="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         <option value="6">6</option>
//         <option value="7">7</option>
//         <option value="8">8</option>
//         <option value="9">9</option>
//         <option value="10">10</option>
//         <option value="11">11</option>
//         <option value="12">12</option>
//         <option value="13">13</option>
//         <option value="14">14</option>

//       </select>

//       <select value={formJainValues.selectedMonth} name='selectedMonth' onChange={handleChange} style={{fontSize:'20px',
//     paddingRight:'40px',paddingLeft:'40px'
//     }}>
//         <option value="">माह चुनें</option>
//         <option value="जनवरी">जनवरी</option>
//         <option value="फरवरी">फरवरी</option>
//         <option value="मार्च">मार्च</option>
//         <option value="अप्रैल">अप्रैल</option>
//         <option value="मई">मई</option>
//         <option value="जून">जून</option>
//         <option value="जुलाई">जुलाई</option>
//         <option value="अगस्त">अगस्त</option>
//         <option value="सितंबर">सितंबर</option>
//         <option value="अक्टूबर">अक्टूबर</option>
//         <option value="नवंबर">नवंबर</option>
//         <option value="दिसंबर">दिसंबर</option>
//       </select>

//       <select value={formJainValues.selectedYear} name='selectedYear' onChange={handleChange} style={{fontSize:'20px',
//     paddingRight:'40px',paddingLeft:'40px'
//     }}>
//         <option value="">वर्ष चुनें</option>
//         <option value="2021">2021</option>
//         <option value="2022">2022</option>
//         <option value="2023">2023</option>
//         {/* Add more year options as needed */}
//       </select>

    

      
      
//     </div>
// </div>

//     <br />

//     <div style={{display:'flex',justifyContent:'space-around'}} className='dobjanamsthan'>
        
//     <div>
//            <select value={formJainValues.dobDay} name='dobDay' onChange={handleChange} style={{fontSize:'20px',
//     paddingRight:'20px',paddingLeft:'20px'
//     }}>
//                 <option value="जन्म वेळ">जन्म वेळ </option>
//                 <option value="जन्म वार">जन्म वार</option>
//                 <option value="जन्म वेळ">जन्म वेळ</option>
//             </select> <br />
//             <input
//             type="text"
//             value={formJainValues.dobDayName}
//             name='dobDayName'
//             placeholder={formJainValues.dobDay}
//             onChange={handleChange}
//           />
//            </div>
    

      
//             <div>
//           <label>जन्म स्थळ:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//             <br />
//         <input
//             type="text"
//             value={formJainValues.birthPlace}
//             name='birthPlace'
//             placeholder='जन्म स्थळ'
//             onChange={handleChange}
//           />
//           </div>



//        <div>
//        <label>नावरस नाव:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.navsarNav}
//             name='navsarNav'
//             placeholder='नावरस नाव'
//             onChange={handleChange}
//           />
//        </div>


//        <div>
//        <label>नावरस नाव/जन्म नाव:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.janamNav}
//             name='janamNav'
//             placeholder='नावरस नाव/जन्म नाव'
//             onChange={handleChange}
//           />
//        </div>



//        <div>
//        <label>धर्म-जात:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.religion}
//             name='religion'
//             placeholder='धर्म-जात'
//             onChange={handleChange}
//           />
//        </div>


//     </div> <br />



 

//     <div style={{display:'flex',justifyContent:'space-around'}} className='rashiGunn'>
        
      


//        <div>
//        <label>ऊंची:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.height}
//             name='height'
//             placeholder='ऊंची'
//             onChange={handleChange}
//           />
//        </div>


//        <div>
//        <label>वर्ण:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.varn}
//             name='varn'
//             placeholder='वर्ण'
//             onChange={handleChange}
//           />
//        </div>


//        <div>
//        <label>रक्तगट:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.bloodGroupInput}
//             name='bloodGroupInput'
//             placeholder='रक्तगट'
//             onChange={handleChange}
//           />
//        </div>
//     </div> <br />


//     <div style={{display:'flex',justifyContent:'space-around'}} className='nokriii'> 
//     <div>
//        <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.yateAathiraktaSirsak}
//             name='yateAathiraktaSirsak'
//             placeholder='शिक्षण'
//             onChange={handleChange}
//           />
//        </div>

//        <div>
//        <label>नोकरी/व्यवसाय:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.job}
//             name='job'
//             placeholder='(Optional) कंपनी किंवा व्यवसायाचे नाव, पोस्ट'
//             onChange={handleChange}
//           />
//        </div>

//     </div> <br />
    


//     <div style={{display:'flex',justifyContent:'space-around'}} className='peeshhaa'> 
//     <div>
//        <label>वेतन/उत्पन्न:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.salary}
//             name='salary'
//             placeholder='(Optional) वेतन/उत्पन्न'
//             onChange={handleChange}
//           />
//        </div>
//        <div>
//        <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.yateAathirakta}
//             placeholder=''
//             name='yateAathirakta'
//             onChange={handleChange}
//           />
//        </div>
//     </div> <br />
      

//     <div>
//       <select value={formJainValues.koutumbikMahiti}
//       name='koutumbikMahiti'
//        onChange={handleChange}
//        style={{
//         fontSize: '20px',
//         paddingRight: '20px',
//         paddingLeft: '20px',
//       }}
//        >
//         <option value="कौटुंबिक माहिती">कौटुंबिक माहिती</option>
      
//       </select>

//       </div>
//       <br />

//     <div className='mygrtiddd'>
//     <div>
//        <label>वडिलांचे नाव:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.vadilchaleNav}
//             name='vadilchaleNav'
//             placeholder=' वडिलांचे संपूर्ण नाव'
//             onChange={handleChange}
//           />
//        </div>



//        <div>
//        <label>वडिलांचा व्यवसाय:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.vadilachanWayasha}
//             placeholder='वडिलांचा व्यवसाय किंवा नोकरी'
//             onChange={handleChange}
//             name='vadilachanWayasha'
//           />
//        </div>




//        <div>
//        <label>आईचे नाव:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.aayicheNav}
//             placeholder='आईचे संपूर्ण नाव'
//             onChange={handleChange}
//             name='aayicheNav'
//           />
//        </div>




//        <div>
//        <label>बहीण:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.bahin}
//             placeholder='1 बहीण विवाहित'
//             onChange={handleChange}
//             name='bahin'
//           />
//        </div>




//        <div>
//        <label>भाऊ:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.bhau}
//             placeholder='2 भाऊ/1 विवाहित'
//             onChange={handleChange}
//             name='bhau'
//           />
//        </div>



//        <div>
//        <label>मामा:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.mama}
//             name='mama'
//             placeholder='मामाचे नाव/आजोळ'
//             onChange={handleChange}
//           />
//        </div>


//        <div>
//        <label>नातेसंबंध:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.natoSamband}
//             name='natoSamband'
//             placeholder='नातेवाईकांची आडनावे'
//             onChange={handleChange}
//           />
//        </div>





//        <div>
//        <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.karuSakta1}
//             placeholder=''
//             onChange={handleChange}
//             name='karuSakta1'
//           />
//        </div>


//        <div>
//        <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.karuSakta2}
//             placeholder=''
//             onChange={handleChange}
//             name='karuSakta2'
//           />
//        </div>


//        <div>
//        <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.karuSakta3}
//             placeholder=''
//             onChange={handleChange}
//             name='karuSakta3'
//           />
//        </div>


       
//        <div>
//        <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.karuSakta4}
//             placeholder=''
//             onChange={handleChange}
//             name='karuSakta4'
//           />
//        </div>


       
//        <div>
//        <label>अपेक्षा:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.aapesha}
//             placeholder='अपेक्षा'
//             onChange={handleChange}
//             name='aapesha'
//           />
//        </div>
//     </div>
//     <br />


//        <label>संपर्क</label>
//       {/* <select value={selectedYear} onChange={handleYearChange}>
//         <option value="">वर्ष चुनें</option>
//         <option value="2021">2021</option>
//         <option value="2022">2022</option>
//         <option value="2023">2023</option>
//         {/* Add more year options as needed */}
//       {/* </select> */}

//     <div style={{display:'flex',justifyContent:'space-around'}} className='addressss'>
        
//       <div>
//        <label>पत्ता:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.addressLine1}
//             placeholder='Address Line 1'
//             onChange={handleChange}
//             name='addressLine1'
//           />
//        </div>

//        <div>
//        <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.addressLine2}
//             placeholder='Address Line 2 (Optional)'
//             onChange={handleChange}
//             name='addressLine2'
//           />
//        </div>

//        <div>
//        <label>मो.नं.:</label>
//       {/* <select value={} onChange={}> */}
//         {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
//         <br />

//         <input
//             type="text"
//             value={formJainValues.mob_no}
//             placeholder='संपर्कासाठी मोबाईल नंबर'
//             onChange={handleChange}
//             name="mob_no"
//           />
//        </div>

//     </div>
//     <br />


//        <div>
//        <label>फोटो:</label> <br />
//        <input
//             type="file"
//             value={formJainValues.pic}
//             placeholder=''
//             name="pic"
//             onChange={handleChange}
//           />
//        </div>

//        <br />
//        <button id='btnnn'>Create Biodata</button>

     
//     </div> 
    
    
    
    
//     </>
//   )
// }

// export default JainForm
