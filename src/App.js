import './App.css';


import Navabar from './component/navabar/Navabar';
import Footer from './component/footer/Footer';
import Routesr from './component/Routes/Routesr';
import { Routes ,Route } from 'react-router-dom';
import Hindu from './component/Hindu/Hindu';
import Muslim from './component/Muslim/Muslim';
import Buddhist from './component/Buddhist/Buddhist';
import Jain from './component/Jain/Jain';
import Christian from './component/Christian/Christian';
import HindiForm from './component/HindiForm/HindiForm';



function App() {
  
  console.log(localStorage.getItem('download'))
  return (
    
    <div className="App">
    <Navabar/>
    <Routesr/>
  <Footer/>
   
    {/* <HindiForm /> */}
    </div>
  );
}

export default App;
