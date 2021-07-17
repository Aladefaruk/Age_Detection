import React from 'react';
import './Inputbox.css'



const Inputbox=({Inputchange, Clickchange} ) => {

    return(
        <div >
         <p className="all">{'Enter your image url below, i will dtect............................'}</p>
        <div className='center'>
        
        <div className="input ">
          
            <input className='ibox' type='text' onChange={Inputchange} />
            <button className='ibut' onClick={Clickchange} >Detect</button>
            </div>
        </div>
        </div>
    )
}
export default Inputbox;