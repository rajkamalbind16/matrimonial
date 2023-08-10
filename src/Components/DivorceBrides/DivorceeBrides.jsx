import React,{useState} from 'react';
import './DivorceeBrides.css';

const DivorceeBrides = () => {

    const divorceeBrides =[
        {
            Reg_No:'MB93914',
            Reg_Dt:'20/06/23',
	        Height:'5.11',
    	    Birth_Dt:'29/09/1990',
        	Education:'MARKETING PROFESSIONAL',
            Residence:'PUNE',
            Occupation:'JOHNSON & JOHNSON´S PUNE/42000 PM',
        },

        {
            Reg_No:'MB93913',
            Reg_Dt:'20/06/23',
	        Height:'5.11',
    	    Birth_Dt:'21/04/1996',
        	Education:'BE(MECH)',
            Residence:'PUNE',
            Occupation:'SERVICE PUNE/ PM',
        },

        
        {
            Reg_No:'MB93912',
            Reg_Dt:'20/06/23',
	        Height:'5.09',
    	    Birth_Dt:'22/03/1994',
        	Education:'M.SC',
            Residence:'PUNE',
            Occupation:'SR. UNIT MANAGER, BAJAJ FINANCE PUNE/17 LAC PA',
        },

        
        {
            Reg_No:'MB93911',
            Reg_Dt:'20/06/23',
	        Height:'5.10',
    	    Birth_Dt:'31/10/1985',
        	Education:'B.SC, D.PHARMA',
            Residence:'PUNE',
            Occupation:'SENIOR SAP CONSULTANT IN WIPRO PUNE/23.50 PA',
        },

        
        {
            Reg_No:'MB93909',
            Reg_Dt:'20/06/23',
	        Height:'5.10',
    	    Birth_Dt:'09/11/1993',
        	Education:'BE(IT)',
            Residence:'PUNE',
            Occupation:'SOFTWARE ENG',
        },

        
        {
            Reg_No:'MB93908',
            Reg_Dt:'20/06/23',
	        Height:'5.11',
    	    Birth_Dt:'22/05/1995',
        	Education:'BSC.AGRI/ MBA',
            Residence:'NETHERLAND',
            Occupation:'QUALITY CONTROLLER NETHERLAND/3000000 PA',
        },

        
        {
            Reg_No:'MB93907',
            Reg_Dt:'20/06/23',
	        Height:'5.09',
    	    Birth_Dt:'10/02/1994',
        	Education:'POST GRADUATE',
            Residence:'AHMEDABAD',
            Occupation:'SERVICE AHMEDABAD/20 lakh PA',
        },
        {
            Reg_No:'MB93914',
            Reg_Dt:'20/06/23',
	        Height:'5.11',
    	    Birth_Dt:'29/09/1990',
        	Education:'MARKETING PROFESSIONAL',
            Residence:'PUNE',
            Occupation:'JOHNSON & JOHNSON´S PUNE/42000 PM',
        },

        {
            Reg_No:'MB93913',
            Reg_Dt:'20/06/23',
	        Height:'5.11',
    	    Birth_Dt:'21/04/1996',
        	Education:'BE(MECH)',
            Residence:'PUNE',
            Occupation:'SERVICE PUNE/ PM',
        },

        
        {
            Reg_No:'MB93912',
            Reg_Dt:'20/06/23',
	        Height:'5.09',
    	    Birth_Dt:'22/03/1994',
        	Education:'M.SC',
            Residence:'PUNE',
            Occupation:'SR. UNIT MANAGER, BAJAJ FINANCE PUNE/17 LAC PA',
        },

        
        {
            Reg_No:'MB93911',
            Reg_Dt:'20/06/23',
	        Height:'5.10',
    	    Birth_Dt:'31/10/1985',
        	Education:'B.SC, D.PHARMA',
            Residence:'PUNE',
            Occupation:'SENIOR SAP CONSULTANT IN WIPRO PUNE/23.50 PA',
        },

        
        {
            Reg_No:'MB93909',
            Reg_Dt:'20/06/23',
	        Height:'5.10',
    	    Birth_Dt:'09/11/1993',
        	Education:'BE(IT)',
            Residence:'PUNE',
            Occupation:'SOFTWARE ENG',
        },

        
        {
            Reg_No:'MB93908',
            Reg_Dt:'20/06/23',
	        Height:'5.11',
    	    Birth_Dt:'22/05/1995',
        	Education:'BSC.AGRI/ MBA',
            Residence:'NETHERLAND',
            Occupation:'QUALITY CONTROLLER NETHERLAND/3000000 PA',
        },

        
        {
            Reg_No:'MB93907',
            Reg_Dt:'20/06/23',
	        Height:'5.09',
    	    Birth_Dt:'10/02/1994',
        	Education:'POST GRADUATE',
            Residence:'AHMEDABAD',
            Occupation:'SERVICE AHMEDABAD/20 lakh PA',
        },

        
        // {
        //     Reg_No:,
        //     Reg_Dt:,
	    //     Height:,
    	//     Birth_Dt:,
        // 	Education:,
        //     Residence:,
        //     Occupation:,
        // },
    ]
   


    const DivorceeBridesDiv =({Reg_No, Reg_Dt,Height,Birth_Dt,Education,Residence,Occupation}) =>{
        return(
            <div className='DivorceeBridesDivslist'>
                <p>{Reg_No}</p>
                <p>{Reg_Dt}</p>
                <p>{Height}</p>
                <p>{Birth_Dt}</p>
                <p>{Education}</p>
                <p>{Residence}</p>
                <p>{Occupation}</p>
            </div>
        )
    }
  // Pagination
  const [currentdivorceeBridesPage, setCurrentdivorceeBridesPage] = useState(1);
  const [profilesPerPage] = useState(5);
  const indexOfLastProfile = currentdivorceeBridesPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = divorceeBrides.slice(indexOfFirstProfile, indexOfLastProfile);

  const paginate = (pageNumber) => setCurrentdivorceeBridesPage(pageNumber);



  return (
    <>
    
      
    <div className='DivorceeBridesbanner'>
        <h2>Maratha Divorcee Brides</h2>
    </div>

    <p>
    This is only reference list of all registered profiles. You may please use Simple Search option to find matching profiles by giving age, height, education, occupation & native place. If you want contact details of matching profiles, please submit matching registration nos. through RESPONSE option along with your registration no. & registered email id.
    </p>

    <div className='DivorceeBridess'>
        <table className='DivorceeBrides-table'>
          <thead>
            <tr className='trDivorceeBrides' style={{background:'red'}}>
              <th>Reg_No</th>
              <th>Reg_Dt</th>
              <th>Height</th>
              <th>Birth_Dt</th>
              <th>Education</th>
              <th>Residence</th>
              <th>Occupation</th>
            </tr>
          </thead>
          <tbody>
            {divorceeBrides.map((divorceeBrides) => (
              <tr key={divorceeBrides.Reg_No}>
                <td>{divorceeBrides.Reg_No}</td>
                <td>{divorceeBrides.Reg_Dt}</td>
                <td>{divorceeBrides.Height}</td>
                <td>{divorceeBrides.Birth_Dt}</td>
                <td>{divorceeBrides.Education}</td>
                <td>{divorceeBrides.Residence}</td>
                <td>{divorceeBrides.Occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='pagination'>
        <button onClick={() => paginate(currentdivorceeBridesPage - 1)} disabled={currentdivorceeBridesPage === 1}>
          Previous
        </button>
        <button onClick={() => paginate(currentdivorceeBridesPage + 1)} disabled={indexOfLastProfile >= divorceeBrides.length}>
          Next
        </button>
      </div>


    
    </>
  )
}

export default DivorceeBrides