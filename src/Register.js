import React, {Component} from 'react';
import './Sign_in.css';
 


class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            email:'',
            password:'',
        }

    }
  

    Namechange=(event)=>{
        this.setState({name:event.target.value})
    }

    Emailchange=(event)=>{
        this.setState({email:event.target.value})
    }
  
    Passwordchange=(event)=>{
      this.setState({password:event.target.value})
  }

  Submitchange=()=>{  
    const {Onregister}= this.props
        
   fetch('http://localhost:3001/signin',{
       method:'post',
       headers:{
        Accept:'application/json',
           'Content-Type':'application/json'},
       body:JSON.stringify({
           email:this.state.Onemailchange,
           password:this.state.Onpasswordchange,
       })
   }).then(response=>response.json())
     .then(user=>{
         if(user.id){
             Onregister('home')
         }
     })
   
    

      
}




    render(){
        const {Onregister}=this.props
        return(
            <div class="wrapper center">
                
            
            <form id='containerr' method="POST" >
               <h2>REGISTER</h2>
            
    
               
               <label for='mail'>Email: </label>  <input type="email" id='mail' onClick={this.Emailchange} required name='email'/>
               <label for='name'>Name: </label>  <input type="name" id='name' onClick={this.Namechange} required name='name'/>
                
             
               <label for='ep'> Enter Password:</label><input type="password" id='ep' onClick={this.Passwordchange} min="8" name='password'/>
             
                
                <input type="submit" onClick={()=>Onregister('home')} value="Register"/>
    
                </form>
                
          </div>
    
        )
    }

}

export default Register;