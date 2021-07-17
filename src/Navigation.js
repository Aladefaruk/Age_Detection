import React from 'react';
import './Navigation.css';



const Navigation=({Onsignout, isSignedin}) => {
        if(isSignedin===true){
            return(  <div>
                <p onClick={Onsignout.bind(this, 'signin')} className="nav">Sign Out</p>
              </div>
     )
        }else{
            return(
        <nav className="nav">
            <div onClick={Onsignout.bind(this, 'signin')} className="">SignIn</div>
            <div onClick={()=>Onsignout('register')} className="">Register</div>
        </nav>)
        }
    
}
export default Navigation;