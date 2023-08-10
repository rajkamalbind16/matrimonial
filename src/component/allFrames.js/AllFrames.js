import React from 'react';
import Temp1 from '../../components/template1/Temp1.js';
import Temp2 from '../../components/template1/Temp2.js';
import Temp3 from '../../components/template1/Temp3.js';
import Temp5 from '../../components/template1/Temp5.js';
import Temp6 from '../../components/template1/Temp6.js';
import Temp7 from '../../components/template1/Temp7.js';
import Temp8 from '../../components/template1/Temp8.js';
import Temp9 from '../../components/template1/Temp9.js';

function AllFrames() {
  return (
    <div className="" style={{ marginBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

  <Temp1 style={{ marginBottom: '10px' }} />
  <Temp2 style={{ marginBottom: '10px' }} />
  <Temp3 style={{ marginBottom: '10px' }} />
  <Temp5 style={{ marginBottom: '10px' }} />
  <Temp6 style={{ marginBottom: '10px' }} />
  <Temp7 style={{ marginBottom: '10px' }} />
  <Temp8 style={{ marginBottom: '10px' }} />
  <Temp9 style={{ marginBottom: '10px' }} />
    </div>
  );
}

export default AllFrames;
