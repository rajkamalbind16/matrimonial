import './App.css';
import Enroll from './Components/Enroll/Enroll';
import Navbar from './Components/Nav/Navbar';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';


import { BrowserRouter,Route,Routes } from 'react-router-dom';
import UnmarriedBrides from './Components/Unmarried Brides/UnmarriedBrides';
import UnmarriedGrooms from './Components/Unmarried Grooms/UnmarriedGrooms';
import Contact from './Components/contact/Contact';
import Matching from './Components/search/Matching';
import Singale from './Components/search/Singale';
import DivorceeGrooms from './Components/DivorceGrooms/DivorceeGrooms';
import DivorceeBrides from './Components/DivorceBrides/DivorceeBrides';
import Response from './Components/Response/Response';
import Horo from './Components/horo/Horoscope';
import Login from './Components/login/Login';
import Renew from './Components/renew/Renew';
import Magazine from './Components/magazine/Magazine';
import SuccessStory from './Components/Success Stories/SuccessStory';
import Rules from './Components/Rules/Rules';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/enroll' element={<Enroll/>} />
    <Route path='/UnmarriedBride' element={<UnmarriedBrides/>} />
    <Route path='/UnmarriedGrooms' element={<UnmarriedGrooms/>} />
    <Route path='/DivorceeGrooms' element={<DivorceeGrooms/>} />
    <Route path='/DivorceeBrides' element={<DivorceeBrides/>} />
    <Route path='/Magazine' element={<Magazine/>} />
    <Route path='/renew' element={<Renew/>} />
    <Route path='/successStories' element={<SuccessStory/>} />
    <Route path='/rules' element={<Rules/>} />

    <Route path='/response' element={<Response/>} />
    <Route path='/Horo' element={<Horo/>} />
    <Route path='/Login' element={<Login/>} />



    <Route path='/matchingSearching' element={<Matching/>} />
    <Route path='/singleID' element={<Singale/>} />
    <Route path='/contact' element={<Contact/>} />
    
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
    
  );
}

export default App;
