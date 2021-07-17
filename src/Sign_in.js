 import React, { Component } from 'react';
import './Sign_in.css';
 


class Sign_in extends Component{
  constructor(props){
      super(props)
      this.state={
          Onemailchange:'',
          Onpasswordchange:'',
       
      } 
  }

  Emailchange=(event)=>{
      this.setState({Onemailchange:event.target.value})
  }

  Passwordchange=(event)=>{
    this.setState({Onpasswordchange:event.target.value})
}

Submitchange=()=>{  
    const {Onsignin}= this.props
        
   fetch('http://localhost:3000/signin',{
       method:'post',
       headers:{
        Accept:'application/json',
           'Content-Type':'application/json'},
       body:JSON.stringify({
           email:this.state.Onemailchange,
           password:this.state.Onpasswordchange,
       })
   })
    .then(response=>{if(response==='success'){
    Onsignin('home')}}
    );

      Onsignin('home')
}
    render(){
        const {Onsignin}= this.props
        
        return(
            <div class="wrapper center">
                
            
            <form id='containerr' method="POST" >
               <h2>SIGN IN</h2>
            
    
                <label for='mail' >Email: </label>  <input type="email" id='mail' onChange={this.Emailchange}  required name='email'/>
                
             
               <label for='ep' > Enter Password:</label><input type="password" id='ep' onChange={this.Passwordchange} min="8" name='password'/>
             
                
                <input type="submit" onClick={this.Submitchange} value="Sign In"/>
    
                 <small onClick={()=>Onsignin('register')} >Register</small>
                </form>
                
          </div>
    
        )
    }

   
}
export default Sign_in; 