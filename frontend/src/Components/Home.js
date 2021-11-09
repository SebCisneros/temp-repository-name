import React from 'react';
 //if you have images in src folder

 
import dda from './dda.png';


import oki from './oki.png';


import wowzer from './Wowzer.png';

console.log(dda);

console.log(wowzer);

console.log(oki);

function Home() {
  return (
    <div>
  {/* <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> */}
     
     
      {/* Center, text and images */}

     {/* Insert splitty question here */}
     <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> <img src = {dda} alt = "cur" /></div>

      <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>  [Insert short description here]</h1>
    
      
      <h2 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Below shows you a short guide on how to use Splitty </h2>
         <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> <img src = {wowzer} alt = "cur" /></div>
      <body> </body> 
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}> <img src = {oki} alt = "cur" /></div>


   
    </div>
  );
}
 
export default Home;