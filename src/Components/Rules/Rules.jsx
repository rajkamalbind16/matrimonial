import React from 'react';
import './rules.css';

import imgg1 from './Maratha Vadhu Var Suchak Kendra_Vadhu Var Vivah Mandal_Maratha Vivah Darbar_page-0001.jpg';
import imgg2 from './Maratha Vadhu Var Suchak Kendra_Vadhu Var Vivah Mandal_Maratha Vivah Darbar_page-0002.jpg';

const Rules = () => {
  return (
    <>
    <div className='rulesBanner'>
        <h2>Rules</h2>
    </div>
    
    <div className='imgg1'>
    <img src={imgg1} alt="" id='img1' />
    </div>

    <div className='imgg2'>
    <img src={imgg2} alt="" id='img2' />

    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default Rules