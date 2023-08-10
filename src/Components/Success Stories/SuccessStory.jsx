import React,{useState} from 'react';
import './SuccessStory.css';

const SuccessStory = () => {
    

    const SuccessStory =[
        {
            GoormId :'MB86098',
	        MarriageOfthisGroom:'DR.MAHESH MANDAKE, PUNE',
        	BrideId:'MG127107',
        	SettledwiththisBride:' PRANOTI PATIL, SANGLI',
        },

        {
            GoormId :'MB87312',
	        MarriageOfthisGroom:'DIGVIJAY BHOSALE, PUNE',
        	BrideId:'MG128489',
        	SettledwiththisBride:'SHWETA MAGAR, PUNE',
        },

        {
            GoormId :'MB84502',
	        MarriageOfthisGroom:'NITISHKUMAR TORASKAR, PUNE',
        	BrideId:'MG128110',
        	SettledwiththisBride:'AKSHAYA NAVGHANE, PUNE',
        },

        {
            GoormId :'MB86018',
	        MarriageOfthisGroom:'SUNIL TODKAR, PUNE',
        	BrideId:'MG126412',
        	SettledwiththisBride:'PRANALI PATIL, KOLHAPUR',
        },

        {
            GoormId :'MB91646',
	        MarriageOfthisGroom:'AVIJEET RENDALE, PUNE',
        	BrideId:'MG127616',
        	SettledwiththisBride:'POOJA RANDIVE, KOLHAPUR',
        },

        {
            GoormId :'MB91111',
	        MarriageOfthisGroom:'AKASH MISAL, MUMBAI',
        	BrideId:'MG124772',
        	SettledwiththisBride:' RUTUJA SHINDE-PATIL, MUMBAI',
        },

        {
            GoormId :'MB86597',
	        MarriageOfthisGroom:'MAYUR PATIL, PUNE',
        	BrideId:'MG127872',
        	SettledwiththisBride:'VRINDA GAIKWAD, SANGLI',
        },

        {
            GoormId :'MB85687',
	        MarriageOfthisGroom:' SURAJ MATE, MUMBAI',
        	BrideId:'MG126681',
        	SettledwiththisBride:'NEHA LAMKANE, SOLAPUR',
        },

        {
            GoormId :'MB89051',
	        MarriageOfthisGroom:'ABHIJIT SHINDE, PUNE',
        	BrideId:'MG123559',
        	SettledwiththisBride:'MADHURI PATIL, SANGLI',
        },

        {
            GoormId :'MB88629',
	        MarriageOfthisGroom:'TUSHAR KAPASE, PUNE',
        	BrideId:'MG126979',
        	SettledwiththisBride:'SHILPA CHAVAN, PUNE',
        },
        	  	  	 
      
    ]


    const pageSize = 5; // Number of items to display per page
    const [currentSuccessPage, setCurrentSuccessPage] = useState(1);
  
    const handlePageSuccesStoryChange = (pageNumber) => {
        setCurrentSuccessPage(pageNumber);
    };
  
    const indexOfLastItem = currentSuccessPage * pageSize;
    const indexOfFirstItem = indexOfLastItem - pageSize;
    const currentItems = SuccessStory.slice(indexOfFirstItem, indexOfLastItem);
  
   

        const SuccessStoryList =({GoormId,MarriageOfthisGroom,BrideId,SettledwiththisBride}) =>{
            return(
                <div className='successStoryDivslist'>
                    <p>  {GoormId}</p>
                    <p>  {MarriageOfthisGroom}</p>
                    <p>  {BrideId}</p>
                    <p>  {SettledwiththisBride}</p>
                </div>
            )
        }


        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(SuccessStory.length / pageSize); i++) {
          pageNumbers.push(i);
        }

  return (
    <>
    <div className='successStoryBanner'>
        <h2>SUCCESS STORIES</h2>
    </div>


    <div className='successStorydiv'>
        <table className='successStory-table'>
          <thead>
            <tr className='trsuccessStory' style={{background:'red'}}>
              <th>GoormId</th>
              <th>MarriageOfthisGroom</th>
              <th>BrideId</th>
              <th>SettledwiththisBride</th>
            </tr>
          </thead>
          <tbody>
            {SuccessStory.map((successStory) => (
              <tr key={successStory.GoormId}>
                <td>{successStory.GoormId}</td>
                <td>{successStory.MarriageOfthisGroom}</td>
                <td>{successStory.BrideId}</td>
                <td>{successStory.SettledwiththisBride}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    

    
      <div className='pagination'>
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageSuccesStoryChange(pageNumber)}
            className={`pagination-button ${
              currentSuccessPage === pageNumber ? 'active' : ''
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>

    
    
    
    
    </>
  )
}

export default SuccessStory