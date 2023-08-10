import React,{useState} from 'react'
import Home from '../home/Home'
import {Routes, Route} from "react-router-dom"
// import Form from '../signup/Form';
import Contact from "../contact/Contact"

import Profile from '../Profile/Profile';
import About from '../About/About';
import Post  from '../pro/pr/Post/CreatePost';
import ProfileForm from '../pro/pr/ProfileForm';
import UpdatePost from '../pro/pr/Post/UpdatePost';
import Feeds from '../pro/pr/feed/Feeds.js';

import Catagory from '../Catorgary/Catagory';
import Hindu from '../Hindu/Hindu';
import Muslim from '../Muslim/Muslim';

import Jain from '../Jain/Jain';
import Christian from '../Christian/Christian';
import Buddhist from '../Buddhist/Buddhist';
// create Muslim and temp
import CreateMTemp1 from '../Muslim/CreateMTemp/CreateMTemp1'
import CreateMTemp2 from '../Muslim/CreateMTemp/CreateMTemp2'
import CreateMTemp3 from '../Muslim/CreateMTemp/CreateMTemp3'
import CreateMTemp4 from '../Muslim/CreateMTemp/CreateMTemp4'
import CreateMTemp5 from '../Muslim/CreateMTemp/CreateMTemp5'
import CreateTemp1 from '../createFrom/CreateTemp1.js'
import CreateTemp2 from '../createFrom/CreateTemp2.js'
import CreateTemp3 from '../createFrom/CreateTemp3.js'
import CreateTemp4 from '../createFrom/CreateTemp4.js'
import CreateTemp5 from '../createFrom/CreateTemp5.js'


//create cristian and temp
import CreateCTemp1 from '../Christian/CreateCTemp/CreateCTemp1.js'
import CreateCTemp2 from '../Christian/CreateCTemp/CreateCTemp2.js'
import CreateCTemp3 from '../Christian/CreateCTemp/CreateCTemp3.js'
import CreateCTemp4 from '../Christian/CreateCTemp/CreateCTemp4.js'
import CreateCTemp5 from '../Christian/CreateCTemp/CreateCTemp5.js'
import CTemp1 from '../Christian/CristianTemps/CTemp1.js'
import CTemp2 from '../Christian/CristianTemps/CTemp2.js'
import CTemp3 from '../Christian/CristianTemps/CTemp3.js'
import CTemp4 from '../Christian/CristianTemps/CTemp4.js'
import CTemp5 from '../Christian/CristianTemps/CTemp5.js'
import ChristianForm from '../Christian/ChirstForm.jsx';



// Create mmaadmi ka mehnat
import CreateBTemp1 from '../Buddhist/CreateBTemp/CreateBTemp1.js'
import CreateBTemp2 from '../Buddhist/CreateBTemp/CreateBTemp2.js';
import CreateBTemp3 from '../Buddhist/CreateBTemp/CreateBTemp3.js';
import CreateBTemp4 from '../Buddhist/CreateBTemp/CreateBTemp4.js';
import CreateBTemp5 from '../Buddhist/CreateBTemp/CreateBTemp5.js';



// jain
import CreateJTemp5 from '../Jain/CreateJTemp/CreateJTemp5.js';
import CreateJTemp4 from '../Jain/CreateJTemp/CreateJTemp4.js';
import CreateJTemp3 from '../Jain/CreateJTemp/CreateJTemp3.js';
import CreateJTemp2 from '../Jain/CreateJTemp/CreateJTemp2.js';
import CreateJTemp1 from '../Jain/CreateJTemp/CreateJTemp1.js';


import Thankyou from '../thankyou/Thankyou.js'
import Form from '../form/Form.js';
//Mtemp
import MuslimTemp1 from '../template1/MuslimTemps/MuslimTemp1.js';
import MuslimTemp2 from '../template1/MuslimTemps/MuslimTemp2.js';
import MuslimTemp3 from '../template1/MuslimTemps/MuslimTemp3.js';
import MuslimTemp4 from '../template1/MuslimTemps/MuslimTemp4.js';
import MuslimTemp5 from '../template1/MuslimTemps/MuslimTemp5.js';
import MuslimForm from '../Muslim/muslimForm.jsx';

//Btemp
import BTemp1 from '../Buddhist/BuddhishTemps/BTemp1.js';
import BTemp2 from '../Buddhist/BuddhishTemps/BTemp2.js';
import BTemp3 from '../Buddhist/BuddhishTemps/BTemp3.js';
import BTemp4 from '../Buddhist/BuddhishTemps/BTemp4.js';
import BTemp5 from '../Buddhist/BuddhishTemps/BTemp5.js';
import BForm from '../Buddhist/budhhistForm.jsx';
//JTemp
import JTemp1 from '../Jain/JainTemps/JTemp1.js';
import JTemp2 from '../Jain/JainTemps/JTemp2.js';
import JTemp3 from '../Jain/JainTemps/JTemp3.js';
import JTemp4 from '../Jain/JainTemps/JTemp4.js';
import JTemp5 from '../Jain/JainTemps/JTemp5.js';
import JainForm from '../Jain/JainForm.jsx';

const Routesr = ( temp) => {
  console.log(temp)
  
  return (
   <>
    <Routes>
       {/* createJain */}
       <Route path="/CreateJTemp1" element={<CreateJTemp1 />} />
      <Route path="/CreateJTemp2" element={<CreateJTemp2 />} />
      <Route path="/CreateJTemp3" element={<CreateJTemp3 />} />
      <Route path="/CreateJTemp4" element={<CreateJTemp4 />} />
      <Route path="/CreateJTemp5" element={<CreateJTemp5 />} />
      {/* Jain temp */}
      <Route path="/JainTemp1" element={<JTemp1 />} />
      <Route path="/JainTemp2" element={<JTemp2 />} />
<Route path="/JainTemp3" element={<JTemp3 />} />
<Route path="/JainTemp4" element={<JTemp4 />} />
<Route path="/JainTemp5" element={<JTemp5 />} />
{/* jain form */}
<Route path="/JForm/:temp" element={<JainForm />} />

       {/* createCristian */}
       <Route path="/CreateCTemp1" element={<CreateCTemp1 />} />
      <Route path="/CreateCTemp2" element={<CreateCTemp2 />} />
      <Route path="/CreateCTemp3" element={<CreateCTemp3 />} />
      <Route path="/CreateCTemp4" element={<CreateCTemp4 />} />
      <Route path="/CreateCTemp5" element={<CreateCTemp5 />} />
      {/* cristian temp */}
      <Route path="/ChristianTemp1" element={<CTemp1 />} />
      <Route path="/ChristianTemp2" element={<CTemp2 />} />
<Route path="/ChristianTemp3" element={<CTemp3 />} />
<Route path="/ChristianTemp4" element={<CTemp4 />} />
<Route path="/ChristianTemp5" element={<CTemp5 />} />
{/* cristian form */}
<Route path="/CForm/:temp" element={<ChristianForm />} />

      {/* muslimForm */}
      {/* createMuslim */}
      <Route path="/CreateMTemp1" element={<CreateMTemp1 />} />
      <Route path="/CreateMTemp2" element={<CreateMTemp2 />} />
      <Route path="/CreateMTemp3" element={<CreateMTemp3 />} />
      <Route path="/CreateMTemp4" element={<CreateMTemp4 />} />
      <Route path="/CreateMTemp5" element={<CreateMTemp5 />} />
      {/* muslimForm */}
      <Route path="/MuslimForm/:temp" element={<MuslimForm />} />
      {/* muslimTemp */}
      <Route path="/MuslimTemp1" element={<MuslimTemp1 />} />
      <Route path="/MuslimTemp2" element={<MuslimTemp2 />} />
      <Route path="/MuslimTemp3" element={<MuslimTemp3 />} />
      <Route path="/MuslimTemp4" element={<MuslimTemp4 />} />
      <Route path="/MuslimTemp5" element={<MuslimTemp5 />} />

           {/* createBuddhist */}
      <Route path="/CreateBTemp1" element={<CreateBTemp1 />} />
      <Route path="/CreateBTemp2" element={<CreateBTemp2 />} />
      <Route path="/CreateBTemp3" element={<CreateBTemp3 />} />
      <Route path="/CreateBTemp4" element={<CreateBTemp4 />} />
      <Route path="/CreateBTemp5" element={<CreateBTemp5 />} />
      {/* BForm */}
      <Route path="/BForm/:temp" element={<BForm />} />
      {/* BTemp */}
      <Route path="/BTemp1" element={<BTemp1 />} />
      <Route path="/BTemp2" element={<BTemp2 />} />
      <Route path="/BTemp3" element={<BTemp3 />} />
      <Route path="/BTemp4" element={<BTemp4 />} />
      <Route path="/BTemp5" element={<BTemp5 />} />
      
      {/* form */}
    <Route path="/form/:temp" element={<Form />} />
    <Route path="/Thankyou" element={<Thankyou />} />
    {/*create hindu */}
    <Route path="/CreateTemp1" element={<CreateTemp1 />} />
    <Route path="/CreateTemp2" element={<CreateTemp2 />} />
    <Route path="/CreateTemp3" element={<CreateTemp3 />} />
    <Route path="/CreateTemp4" element={<CreateTemp4 />} />
    <Route path="/CreateTemp5" element={<CreateTemp5 />} />
          <Route path='/feeds' element={<Feeds/>} ></Route>
         <Route path='/post' element={<Post/>} ></Route>
         <Route path='/profileForm' element={<ProfileForm/>} ></Route>
         <Route path='/updatePost' element={<UpdatePost/>} ></Route>
     
    <Route path='/profile' element={<Profile/>} ></Route>
   


          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/catagory' element={<Catagory/>} ></Route>


          <Route path='/about' element={<About/>} ></Route>

          {/* <Route path='/form' element={<Form/>} ></Route> */}
      
      <Route path='/' element={<Home/>} ></Route>

      <Route path='/hinduReg' element={<Hindu/>} ></Route>
      <Route path='/muslim' element={<Muslim/>} ></Route>
      <Route path='/jain' element={<Jain/>} ></Route>
      <Route path='/christain' element={<Christian/>} ></Route>
      <Route path='/buddhist' element={<Buddhist/>} ></Route>

    </Routes>
    </>
  )
}

export default Routesr
