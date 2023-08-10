import React,{useState} from 'react';
import './TempForm.css';

const HindiForm = () => {
  const [formValues, setFormValues] = useState({
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
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };



console.log(formValues)



  //   const [greetGod ,setGreetGod] = useState('');
  //   const [FormatType, setFormatType ] = useState('');
  // const [title, setTitle] = useState('');
  // const [name, setName] = useState('');
  // const [dob, setDob] = useState('');
  // const [selectedDate, setSelectedDate] = useState('');
  // const [selectedMonth, setSelectedMonth] = useState('');
  // const [selectedYear, setSelectedYear] = useState('');
  // const [DobDayName, setDobDayName] = useState('');



  //   const [DobDay, setDobDay] = useState('');

  // const handleGreetGod =(e) =>{
  //   setGreetGod(e.target.value);
  // }

  // const handleFormatType =(e) =>{
  //   setFormatType(e.target.value);
  // }

  // const handleTitleChange = (e) => {
  //   setTitle(e.target.value);
  // };

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };

  // const handleDobDayChange = (e) => {
  //   setDobDayName(e.target.value);
  // };

  

  // const handleDateChange = (e) => {
  //   setSelectedDate(e.target.value);
  // };

  // const handleMonthChange = (e) => {
  //   setSelectedMonth(e.target.value);
  // };

  // const handleYearChange = (e) => {
  //   setSelectedYear(e.target.value);
  // };

  // const handledobChange = (e) => {
  //   setDob(e.target.value);
  // };

  // const handleDobDAyChange = (e) => {
  //   setDobDay(e.target.value);
  // };

 







  return (
    <>
  <div className='mainFormssss'>
        <label></label>
        <select
          value={formValues.greetGod}
          onChange={handleChange}
          name='greetGod'
          style={{
            fontSize: '20px',
            paddingRight: '20px',
            paddingLeft: '20px',
          }}
        >
          <option value=''>|| श्री गणेशाय नम: ||</option>
        </select>
        <br />
        <br />

        <label></label>
        <select
          value={formValues.formatType}
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

        <div className='navJanamTarikh'>
          <div>
            <label>
              <select
                value={formValues.title}
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
                value={formValues.name}
                placeholder={formValues.title}
                onChange={handleChange}
                name='name'
              />
            </label>
          </div>


          <div>
            <select
              value={formValues.dob}
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
              value={formValues.selectedDate}
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

      <select value={formValues.selectedMonth} name='selectedMonth' onChange={handleChange} style={{fontSize:'20px',
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

      <select value={formValues.selectedYear} name='selectedYear' onChange={handleChange} style={{fontSize:'20px',
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
           <select value={formValues.dobDay} name='dobDay' onChange={handleChange} style={{fontSize:'20px',
    paddingRight:'20px',paddingLeft:'20px'
    }}>
                <option value="जन्म वेळ">जन्म वेळ </option>
                <option value="जन्म वार">जन्म वार</option>
                <option value="जन्म वेळ">जन्म वेळ</option>
            </select> <br />
            <input
            type="text"
            value={formValues.dobDayName}
            name='dobDayName'
            placeholder={formValues.dobDay}
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
            value={formValues.birthPlace}
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
            value={formValues.navsarNav}
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
            value={formValues.janamNav}
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
            value={formValues.religion}
            name='religion'
            placeholder='धर्म-जात'
            onChange={handleChange}
          />
       </div>


    </div> <br />



    <div style={{display:'flex',justifyContent:'space-around'}} className='kuldevta'>
    <div>
       <label>कुलदैवत:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValues.kuldevta}
            name='kuldevta'
            placeholder='कुलदैवत'
            onChange={handleChange}
          />
       </div>


       <div>
       <label>गोत्र:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />


        <input
            type="text"
            value={formValues.gotra}
            name='gotra'
            placeholder='गोत्र'
            onChange={handleChange}
          />
       </div>


       
       <div>
       <label>देवक:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}         <br />


        <input
            type="text"
            value={formValues.dewak}
            name='dewak'
            placeholder='देवक'
            onChange={handleChange}
          />
       </div>


       <div>
       <label>नक्षत्र:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValues.naksatra}
            name='naksatra'
            placeholder='नक्षत्र'
            onChange={handleChange}
          />
       </div>


    </div> <br />

    <div style={{display:'flex',justifyContent:'space-around'}} className='rashiGunn'>
        
       <div>
       <label>राशी:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValues.rashii}
            name='rashii'
            placeholder='राशी'
            onChange={handleChange}
          />
       </div>

       <div>
       <label>गण:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValues.gann}
            name='gann'
            placeholder='गण'
            onChange={handleChange}
          />
       </div>


       <div>
       <label>नाडी:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValues.naadi}
            name='naadi'
            placeholder='नाडी'
            onChange={handleChange}
          />
       </div>


       <div>
       <label>ऊंची:</label>
      {/* <select value={} onChange={}> */}
        {/* <option value="जन्म स्थळ">जन्म स्थळ</option> */}
        <br />

        <input
            type="text"
            value={formValues.height}
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
            value={formValues.varn}
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
            value={formValues.bloodGroupInput}
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
            value={formValues.yateAathiraktaSirsak}
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
            value={formValues.job}
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
            value={formValues.salary}
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
            value={formValues.yateAathirakta}
            placeholder=''
            name='yateAathirakta'
            onChange={handleChange}
          />
       </div>
    </div> <br />
      

    <div>
       <label>कौटुंबिक माहिती</label>
      <select value={formValues.koutumbikMahiti}
      name='koutumbikMahiti'
       onChange={handleChange}>
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
            value={formValues.vadilchaleNav}
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
            value={formValues.vadilachanWayasha}
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
            value={formValues.aayicheNav}
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
            value={formValues.bahin}
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
            value={formValues.bhau}
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
            value={formValues.mama}
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
            value={formValues.natoSamband}
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
            value={formValues.karuSakta1}
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
            value={formValues.karuSakta2}
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
            value={formValues.karuSakta3}
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
            value={formValues.karuSakta4}
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
            value={formValues.aapesha}
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
            value={formValues.addressLine1}
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
            value={formValues.addressLine2}
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
            value={formValues.mob_no}
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
    placeholder=''
    name="pic"
    id="pic"
    onchange="savePhotoToLocalStorage(event)"
  />
</div>

       <br />
       <button id='btnnn'>Create Biodata</button>

     
    </div> 
       </>
  )
}

export default HindiForm