import React, {  useState } from 'react';
import {  Box, Tooltip, IconButton, Avatar, colors } from "@mui/material";
import Styles from "./navabar.module.css"
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import Musicpage from '../home/music/Musicpage';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';
import { RiCloseCircleLine } from 'react-icons/ri'
import logo from "./logo.jpg"
  
const Navbar = () => {

  

  const [hide, setHide] = useState(false);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const name = localStorage.getItem('first_name');
  const isLogin = localStorage.getItem('isLogin');

  const handleOpenUserMenu = () => {
    if (isLogin) {
      navigate('/profileForm');
    } else {
      navigate('/form');
      window.alert('You have to login first');
    }
  };

  const handleClick = () => setClick(!click);



  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      console.log('logOut');
      localStorage.clear();
      window.location.href = '/';
      console.log('home');
    }
  };
  
  
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


  return (
    <>
    <div className={Styles.container}>
    <div className={Styles.left}>
  <img width="80%" height="100%" src={logo}/>
    </div>
    <div className={Styles.right}>
    
      <ul>
      <li >
      <div className={Styles.search}>
    
    </div>
                  </li>
                  <li className={Styles.home}>
                    <Link to="/" style={{ color:'black',textDecoration: 'none' }}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles.advanture}>
                    <Link to="/catagory" style={{ color:'black',textDecoration: 'none' }}>
                      Search by religion
                    </Link>
                  </li>
                  <li className={Styles.feed}>
                    <Link to="/contact" style={{ color:'black',textDecoration: 'none' }}>
                      Contact us
                    </Link>
                  </li>
                  
                  <li className={Styles.hi}>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                          <h6>{name ? `Hi!! ${name}` : 'Hi Guest!!'}</h6>
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </li>
                  {isLogin ? (
                    <li className={Styles.hideh}>
                      <Link  onClick={handleLogout} style={{color:'black', textDecoration: 'none' }}>
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li className={Styles.hideh}>
                      <Link to="/form" style={{color:'black', textDecoration: 'none' }}>
                        Sign In
                      </Link>
                    </li>
                  )}
                
                 
                  
      </ul>
 
         
      
    </div>
    <div className={Styles.last}>
    <Musicpage />
    {active ?null : <div onClick={handleShow } ><FaBars size={20} /> </div>}

    {show && <div><ul className={ Styles.active} style={{ listStyle: 'none' }}>
       <li onClick={showActive} style={{color: "white", fontSize:"150%" }}>
       <RiCloseCircleLine/>
       </li>
    
       <li className={Styles.hideh}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      Home
                    </Link>
                  </li>
                  <li className={Styles.hideh}>
                    <Link to="/catagory" style={{ textDecoration: 'none' }}>
                      Search by religion
                    </Link>
                  </li>
                  <li className={Styles.hideh}>
                    <Link to="/contact" style={{ textDecoration: 'none' }}>
                    Contact us
                    </Link>
                  </li>
                  
                  <li className={Styles.hideh}>
                    <Box sx={{ flexGrow: 0 }}>
                      <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                          <h6 style={{color:"white"}}>{name ? `Hi!! ${name}` : 'Hi Guest!!'}</h6>
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </li>
                  {isLogin ? (
                    <li style={{color:"white"}} className={Styles.lihideh}>
                      <Link to="/form" onClick={handleLogout} style={{ textDecoration: 'none' }}>
                        Logout
                      </Link>
                    </li>
                  ) : (
                    <li style={{color:"white"}} className={Styles.lihideh}>
                      <Link to="/form" style={{ textDecoration: 'none' }}>
                        Sign In
                      </Link>
                    </li>
                  )}
                 
              <li className={Styles.lihome}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      Home
                    </Link>
                  </li>
                  <li>
                <a href='/catagory' style={{ textDecoration: 'none' }}>Search by religion</a>
              </li>
                 
                   
              <li>
                <a href="/contact" style={{ textDecoration: 'none' }}>ContactUs</a>
              </li>
            
             
  
            
            </ul> </div> } 
    </div>
     
      
    </div>
    
        </>
    
  )
}

export default Navbar;