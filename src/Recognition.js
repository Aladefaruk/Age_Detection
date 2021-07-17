import React from 'react';
import './Recognition.css';



const Recognition=({Imgurl,Box,Age}) => {

    return(
        
        <div className='center'>
            <div className="abs">
            <div className="sm"><span className="age">{Age}</span></div>
               <img alt='' className="uni" id='inp' src={Imgurl} width='500px' height='auto'/>
              
               <div className='bord' style={{top:Box.topRow, right:Box.rightCol, bottom:Box.bottomRow, left:Box.leftCol}}> </div>
               
         </div>
        </div>
        
        
        
       
    )
}
export default Recognition;