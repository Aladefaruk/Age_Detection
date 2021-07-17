import React from 'react';
import logo from './logo.png';
import './Logo.css'


const Logo=() => {

    return(
        <div className='logo'>
            <img alt='logo' src={logo} width='80px'  height='80px'/>
        </div>

    )
}
export default Logo;