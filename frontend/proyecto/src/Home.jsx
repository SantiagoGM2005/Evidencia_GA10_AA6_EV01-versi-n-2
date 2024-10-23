import React from "react";
import './Home.css'
import { useNavigate } from 'react-router-dom';
import fondo from "./assets/fondoproyecto.jpg"

function Home (){
    return(
        <div className="Home" id="Home">
        <img src={fondo} alt="fondo" className="background-image" />
         <h1>BIENVENIDO </h1>
        
        </div>
        
        
    )
}

export default Home;  