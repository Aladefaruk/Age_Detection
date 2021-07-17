import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import Clarifai from "clarifai";
import Navigation from './Navigation';
import Logo from './Logo';
import Rank from './Rank';
import Sign_in from './Sign_in';
import Register from './Register';
import Inputbox from './Inputbox';
import Recognition from './Recognition';
import * as serviceWorker from './serviceWorker';




const app = new Clarifai.App({
 apiKey: '77c9b4f3ffc340f1a49bc04cb9db2be8'
});

class App extends Component {
    constructor(){
        super()
        this.state={
            input: '',
            imgurl: '',
            box:{},
            age:'',
            Route:'signin',
            isSignedin:false

        }
    }



returnAge=(data)=>{
  const age= data.outputs[0].data.regions[0].data.concepts[0].name;
  return(age)
}
    
calculatebox=(data)=>{
  const clarifaiFace= data.outputs[0].data.regions[0].region_info.bounding_box;
  
  const image = document.getElementById("inp");
  const width=(image.clientWidth);
  const height= (image.clientHeight);
 
 return {
   leftCol:clarifaiFace.left_col * width,
   topRow: clarifaiFace.top_row * height,
   rightCol: width - (clarifaiFace.right_col * width),
   bottomRow: height - (clarifaiFace.bottom_row * height) }
}

displayFacebox=(box,age)=>{
  console.log(box)
  console.log(age)
  this.setState({box:box});
  this.setState({age:age});
  
}

    Inputchange=(event)=>{ 
      this.setState({input:event.target.value})
      
    }

     Clickchange=( )=>{
      this.setState({imgurl:this.state.input})
      
      app.models.predict(Clarifai.DEMOGRAPHICS_MODEL,this.state.input).then(response=>{
        this.displayFacebox(this.calculatebox(response),this.returnAge(response))},
        )
        
        
    }
onRoutechange=(route)=>{
  if(route==='home'){
    this.setState({isSignedin:true})
  }
  else {this.setState({isSignedin:false})}
  this.setState({Route:route});
}

 
    render(){
        return(
            <div>
              
            <Navigation  Onsignout={this.onRoutechange} isSignedin={this.state.isSignedin}/>
      
           { this.state.Route=== 'signin'?
           <div>
             <Sign_in Onsignin={this.onRoutechange}/>
             </div>
           :(this.state.Route==='register'?
           <Register Onregister={this.onRoutechange} />:
            
           <div>
            <Logo/>
            <Rank/>
            <Inputbox Inputchange={this.Inputchange}  Clickchange={this.Clickchange}/>
            <Recognition Box={this.state.box} Age={this.state.age} Imgurl={this.state.imgurl}/>
            </div>)}
            </div>
        )
    }


}



   



export default App;