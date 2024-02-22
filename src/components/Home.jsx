import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import '../css/Home.scss';



const Home = () =>{

    return(
        <div className="dashboard">
            <Sidebar/>
            <div className="dashboard--content">
            <Content/>

            </div>
        </div>
    )
}
export default Home;