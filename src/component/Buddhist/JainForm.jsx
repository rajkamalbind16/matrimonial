import React from 'react';
import { useState } from 'react';
import './JainForm.css'

const JainForm = () => {

  const [formJainValues, setformJainValues] = useState({
    greetGod: '',
    formatType: '',
    title: '',
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
job:'',
salary:'',
yateAathirakta:'',
koutumbikMahiti:'',
vadilchaleNav:'',
vadilachanWayasha:'',
aayicheNav:'',
bahin:'',
bhau:'',
mama:'',
natoSamband:'',
karuSakta1:'',
karuSakta2:'',
karuSakta3:'',
karuSakta4:'',
aapesha:'',
addressLine1:'',
addressLine2:'',
mob_no:'',
pic:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformJainValues((prevValues) => ({ ...prevValues, [name]: value }));
  };




console.warn(formJainValues);
 


  return (
    <>
    <div className='mainFormJain'>
        <label></label>
        <select
          value={formJainValues.greetGod}
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
          value={formJainValues.formatType}
          onChange={handleChange}
          name='formatType'
          style={{
            fontSize: '20px',
            paddingRight: '20px',
            paddingLeft: '20px',
          }}
        >
          <option value=''>कोई आयु चुनें</option>
          <option value='type1'>बायोडाटा</option>
          <option value='type2'>परिचय पत्र</option>
          <option value='type3'>वैयक्तिक माहिती</option>
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
                value={formJainValues.title}
                onChange={handleChange}
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
                value={formJainValues.name}
                placeholder={formJainValues.title}
                onChange={handleChange}
                name='name'
              />
            </label>
          </div>


          <div>
            <select
              value={formJainValues.dob}
              onChange={handleChange}
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
              value={formJainValues.selectedDate}
              onChange={handleChange}
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

      </select>

      <select value={formJainValues.selectedMonth} name='selectedMonth' onChange={handleChange} style={{fontSize:'20px',
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

      <select value={formJainValues.selectedYear} name='selectedYear' onChange={handleChange} style={{fontSize:'20px',
    paddingRight:'40px',paddingLeft:'40px'
    }}>
        <option value="">वर्ष चुनें</option>
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
           <select value={formJainValues.dobDay} name='dobDay' onChange={handleChange} style={{fontSize:'20px',
    paddingRight:'20px',paddingLeft:'20px'
    }}>
                <option value="जन्म वेळ">जन्म वेळ </option>
                <option value="जन्म वार">जन्म वार</option>
                <option value="जन्म वेळ">जन्म वेळ</option>
            </select> <br />
            <input
            type="text"
            value={formJainValues.dobDayName}
            name='dobDayName'
            placeholder={formJainValues.dobDay}
            onChange={handleChange}
          />
           </div>
    

      
            <div>
          <label>जन्म स्थळ:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
            <br />
        <input
            type="text"
            value={formJainValues.birthPlace}
            name='birthPlace'
            placeholder='जन्म स्थळ'
            onChange={handleChange}
          />
          </div>



       <div>
       <label>नावरस नाव:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.navsarNav}
            name='navsarNav'
            placeholder='नावरस नाव'
            onChange={handleChange}
          />
       </div>


       <div>
       <label>नावरस नाव/जन्म नाव:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.janamNav}
            name='janamNav'
            placeholder='नावरस नाव/जन्म नाव'
            onChange={handleChange}
          />
       </div>



       <div>
       <label>धर्म-जात:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.religion}
            name='religion'
            placeholder='धर्म-जात'
            onChange={handleChange}
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
            value={formJainValues.height}
            name='height'
            placeholder='ऊंची'
            onChange={handleChange}
          />
       </div>


       <div>
       <label>वर्ण:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.varn}
            name='varn'
            placeholder='वर्ण'
            onChange={handleChange}
          />
       </div>


       <div>
       <label>रक्तगट:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.bloodGroupInput}
            name='bloodGroupInput'
            placeholder='रक्तगट'
            onChange={handleChange}
          />
       </div>
    </div> <br />


    <div style={{display:'flex',justifyContent:'space-around'}} className='nokriii'> 
    <div>
       <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.yateAathiraktaSirsak}
            name='yateAathiraktaSirsak'
            placeholder='शिक्षण'
            onChange={handleChange}
          />
       </div>

       <div>
       <label>नोकरी/व्यवसाय:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.job}
            name='job'
            placeholder='(Optional) कंपनी किंवा व्यवसायाचे नाव, पोस्ट'
            onChange={handleChange}
          />
       </div>

    </div> <br />
    


    <div style={{display:'flex',justifyContent:'space-around'}} className='peeshhaa'> 
    <div>
       <label>वेतन/उत्पन्न:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.salary}
            name='salary'
            placeholder='(Optional) वेतन/उत्पन्न'
            onChange={handleChange}
          />
       </div>
       <div>
       <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.yateAathirakta}
            placeholder=''
            name='yateAathirakta'
            onChange={handleChange}
          />
       </div>
    </div> <br />
      

    <div>
      <select value={formJainValues.koutumbikMahiti}
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
            value={formJainValues.vadilchaleNav}
            name='vadilchaleNav'
            placeholder=' वडिलांचे संपूर्ण नाव'
            onChange={handleChange}
          />
       </div>



       <div>
       <label>वडिलांचा व्यवसाय:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.vadilachanWayasha}
            placeholder='वडिलांचा व्यवसाय किंवा नोकरी'
            onChange={handleChange}
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
            value={formJainValues.aayicheNav}
            placeholder='आईचे संपूर्ण नाव'
            onChange={handleChange}
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
            value={formJainValues.bahin}
            placeholder='1 बहीण विवाहित'
            onChange={handleChange}
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
            value={formJainValues.bhau}
            placeholder='2 भाऊ/1 विवाहित'
            onChange={handleChange}
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
            value={formJainValues.mama}
            name='mama'
            placeholder='मामाचे नाव/आजोळ'
            onChange={handleChange}
          />
       </div>


       <div>
       <label>नातेसंबंध:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.natoSamband}
            name='natoSamband'
            placeholder='नातेवाईकांची आडनावे'
            onChange={handleChange}
          />
       </div>





       <div>
       <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.karuSakta1}
            placeholder=''
            onChange={handleChange}
            name='karuSakta1'
          />
       </div>


       <div>
       <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.karuSakta2}
            placeholder=''
            onChange={handleChange}
            name='karuSakta2'
          />
       </div>


       <div>
       <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.karuSakta3}
            placeholder=''
            onChange={handleChange}
            name='karuSakta3'
          />
       </div>


       
       <div>
       <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.karuSakta4}
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
            value={formJainValues.aapesha}
            placeholder='अपेक्षा'
            onChange={handleChange}
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
            value={formJainValues.addressLine1}
            placeholder='Address Line 1'
            onChange={handleChange}
            name='addressLine1'
          />
       </div>

       <div>
       <label>येथे अतिरिक्त शीर्षक अ‍ॅड करू शकता:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formJainValues.addressLine2}
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
            value={formJainValues.mob_no}
            placeholder='संपर्कासाठी मोबाईल नंबर'
            onChange={handleChange}
            name="mob_no"
          />
       </div>

    </div>
    <br />


       <div>
       <label>फोटो:</label> <br />
       <input
            type="file"
            value={formJainValues.pic}
            placeholder=''
            name="pic"
            onChange={handleChange}
          />
       </div>

       <br />
       <button id='btnnn'>Create Biodata</button>

     
    </div> 
    
    
    
    
    </>
  )
}

export default JainForm
