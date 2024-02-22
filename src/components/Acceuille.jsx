import React from "react";
import '../css/Acceuille.scss';
import Nav from "./Nav";
import Section1 from "./Section1";
import Section2 from "./Section2";

function Acceuille(){
    return(
        <>
        <div className="navbar">
            <Nav/>
        </div>
       <div className="fisrt">
            <Section1/>
       </div>
       <Section2/>

      


      
        </>

    );
}
export default Acceuille;