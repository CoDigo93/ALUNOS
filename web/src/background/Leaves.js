import React from 'react';
import nota1 from '../assets/oie.png';
import nota2 from '../assets/violao-escuro.png';
import nota3 from '../assets/violao-escuro2.png';
import logo from '../assets/logo-musica.png';

export default function Leaf() {
    return( 
    <>  
        <div className="leaf">
            <>
            <div>  <img src={nota1}alt="" height="75px" width="75px"></img></div>
            <div><img src={nota2}alt="" height="45px" width="45px"></img></div>
            <div>  <img src={nota3}alt="" height="35px" width="35px" ></img></div>
            <div><img  src={nota1}alt="" height="75px" width="75px"></img></div>
            <div> <img src={nota1}alt="" height="75px" width="75px"></img></div>
            <div>   <img src={logo}alt="" height="35px" width="35px"></img></div>
            <div><img src={logo}alt="" height="55px" width="55px"></img></div>
            </>       
        </div>
            
        <div className="leaf leaf1">
            <>
            <div>  <img src={nota1}alt="" height="55px" width="55px"></img></div>
            <div><img src={nota2}alt="" height="45px" width="45px"></img></div>
            <div>  <img src={nota3}alt="" height="55px" width="55px" ></img></div>
            <div><img  src={nota1}alt="" height="75px" width="75px"></img></div>
            <div> <img src={nota1}alt="" height="55px" width="55px"></img></div>
            <div>   <img src={logo}alt="" height="45px" width="45px"></img></div>
            <div><img src={logo}alt="" height="55px" width="55px"></img></div>
            </>        
        </div>
            
        <div className="leaf leaf2">
            <>
            <div>  <img src={nota1}alt="" height="55px" width="55px"></img></div>
            <div><img src={nota2}alt="" height="45px" width="45px"></img></div>
            <div>  <img src={nota3}alt="" height="35px" width="35px" ></img></div>
            <div><img  src={nota1}alt="" height="75px" width="75px"></img></div>

            <div> <img src={nota1}alt="" height="55px" width="55px"></img></div>
            <div>   <img src={logo}alt="" height="35px" width="35px"></img></div>
            <div><img src={logo}alt="" height="55px" width="55px"></img></div>
            </>
        </div>
                
    </>
     );
}
