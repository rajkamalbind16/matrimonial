import React, { useState } from 'react';
import './Navbar.css';
import mylogoo from '../Nav/logoo.jpg';
import { Link } from 'react-router-dom';
import {HiLocationMarker,} from 'react-icons/hi'
import { BiTime} from 'react-icons/bi'
import { MdCall} from 'react-icons/md'
import { GiHamburgerMenu} from 'react-icons/gi'
import {LuRefreshCcw} from 'react-icons/lu';

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Track menu visibility

  const[show, setshow]=useState(false)
const handleShow = ()=>{
  setshow(true)
  setactive(true)
}
const [active, setactive]=useState(false)
const showActive =()=>{
  setactive(false)
  setshow(false)
}


  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  
  const handleMouseEnterSearch = () => {
    setIsHovered1(true);
  };

  const handleMouseLeaveSearch = () => {
    setIsHovered1(false);
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
    <div className='containerNav'>
     <div className='leftNav'>
     <img width="80%" height="80%" src={mylogoo} alt="Logo" id='logo' />
     </div>
   
      
     {show ? <div>
      <nav className="navbarContainer">
       
       
        <div className={`mymenu ${!isMenuOpen ? 'open' : ''}`}>
        <Link to="/" style={{textDecoration:'none'}}><p>Home</p></Link>
        <Link to="/rules" style={{textDecoration:'none'}}> <p>Rules</p></Link>
          <Link to="/enroll" style={{textDecoration:'none'}}><p>Enroll</p></Link>


          <div
            className="dropdowncontainer"
            onMouseEnter={handleMouseEnterSearch}
            onMouseLeave={handleMouseLeaveSearch}
          >
            <p className="dropdownbutton">Search</p>
            {isHovered1 && (
              <div className="dropdowncontent">
                <Link to="/matchingSearching" style={{textDecoration:'none'}}>
                  <p> Matching Searching</p>
                </Link>
                <Link to="/singleID" style={{textDecoration:'none'}}>
                  <p>Single ID Searching</p>
                </Link>
               
              </div>
            )}
          </div>




          <div
            className="dropdowncontainer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <p className="dropdownbutton">Profile</p>
            {isHovered && (
              <div className="dropdowncontent">
                <Link to="/UnmarriedBride" style={{textDecoration:'none'}}>
                  <p>Maratha Unmarried Brides</p>
                </Link>
                <Link to="/UnmarriedGrooms" style={{textDecoration:'none'}}>
                  <p>Maratha Unmarried Grooms</p>
                </Link>
                <Link to="/DivorceeGrooms" style={{textDecoration:'none'}}>
                  <p>Maratha Divorcee Grooms</p>
                </Link>
                <Link to="/DivorceeBrides" style={{textDecoration:'none'}}>
                  <p>Maratha Divorcee Brides</p>
                </Link>
              </div>
            )}
          </div>
          <Link to="/response" style={{textDecoration:'none'}}><p>Response</p></Link>
          <Link to="/Login" style={{textDecoration:'none'}}><p>Profile Login</p></Link>
          <Link to="/Horo" style={{textDecoration:'none'}}><p>Horoscope</p></Link>
          <Link to="/renew" style={{textDecoration:'none'}}><p>Renew</p></Link>
          <Link to="/successStories" style={{textDecoration:'none'}}><p>Success Stories</p></Link>
          <Link to="/Magazine" style={{textDecoration:'none'}}><p>Magazine</p></Link>
          <Link to="/contact" style={{textDecoration:'none'}}><p>Contact Us</p></Link>
          <p><LuRefreshCcw/></p>
        </div>
      </nav>
        </div>:
        <div className='rightNav'>
        <div className='rightNav'>
        <div>
        
        <HiLocationMarker className='icon'/>
       
      
        <p>23456, Barahata road <br/> Shautan gali mumbai</p>
      </div>
  
      <div>
       
        <BiTime  className='icon'/>
       
      <p>Monday-Sunday <br/> 9:00 Am to 9:00Pm</p>
      </div>
      <div>
    
        <MdCall  className='icon'/>
       <p>98765356723 <br/>7835647658</p>
       
      </div>
     
      </div>
        </div>
        }
     
      
    
     
     <div className='last'>
   
     {active ? <div onClick={showActive} className='burger'>X</div>: <div onClick={handleShow } ><GiHamburgerMenu className='burger'  /> </div>}
     </div>
    </div>








    </>
  );
};

export default Navbar;
