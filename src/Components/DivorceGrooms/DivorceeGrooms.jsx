import React,{useState} from 'react';
import './DivorceeGrooms.css';

const DivorceeGrooms = () => {

    const divorceeGrooms =[
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
   


    const divorceeGroomsDiv =({Reg_No, Reg_Dt,Height,Birth_Dt,Education,Residence,Occupation}) =>{
        return(
            <div className='divorceeGroomsDivslist'>
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


    const itemsPerPage = 5; // Number of items to display per page
    const [currentDivorceeGroomsPage, setCurrentDivorceeGroomsPage] = useState(1); // Current page number
  
    const indexOfLastItem = currentDivorceeGroomsPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = divorceeGrooms.slice(indexOfFirstItem, indexOfLastItem);
  
    // Handle page change
    const handlePageDivorceeGroomsChange = (pageNumber) => {
        setCurrentDivorceeGroomsPage(pageNumber);
    };
  





  return (
    <>
    
      
    <div className='divorceeGroomsbanner'>
        <h2>Maratha Divorcee Brides</h2>
    </div>

    <p>
    This is only reference list of all registered profiles. You may please use Simple Search option to find matching profiles by giving age, height, education, occupation & native place. If you want contact details of matching profiles, please submit matching registration nos. through RESPONSE option along with your registration no. & registered email id.
    </p>

    <div className='divorceeGroomss'>
        <table className='divorceeGrooms-table'>
          <thead>
            <tr className='trdivorceeGrooms' style={{background:'red'}}>
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
            {divorceeGrooms.map((divorceeGrooms) => (
              <tr key={divorceeGrooms.Reg_No}>
                <td>{divorceeGrooms.Reg_No}</td>
                <td>{divorceeGrooms.Reg_Dt}</td>
                <td>{divorceeGrooms.Height}</td>
                <td>{divorceeGrooms.Birth_Dt}</td>
                <td>{divorceeGrooms.Education}</td>
                <td>{divorceeGrooms.Residence}</td>
                <td>{divorceeGrooms.Occupation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Pagination */}
      <div className='pagination'>
        <button
          onClick={() => handlePageDivorceeGroomsChange(currentDivorceeGroomsPage - 1)}
          disabled={currentDivorceeGroomsPage === 1}
        >
          Previous
        </button>
        {[...Array(Math.ceil(divorceeGrooms.length / itemsPerPage))].map(
          (page, index) => (
            <button
              key={index}
              onClick={() => handlePageDivorceeGroomsChange(index + 1)}
              disabled={currentDivorceeGroomsPage === index + 1}
            >
              {index + 1}
            </button>
          )
        )}
        <button
          onClick={() => handlePageDivorceeGroomsChange(currentDivorceeGroomsPage + 1)}
          disabled={currentDivorceeGroomsPage === Math.ceil(divorceeGrooms.length / itemsPerPage)}
        >
          Next
        </button>
      </div>


    
    
    
    
    
    
    </>
  )
}

export default DivorceeGrooms