import React from "react";
import '../css/Section1.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

function Section1(){
    
    const [checkboxes, setCheckboxes] = React.useState({
        work: false,
        gestionProjet: false,
        taskManager:false,
        water:false,
        
      });
    
      const handleCheckboxChange = (category) => {
        setCheckboxes((prevCheckboxes) => ({
          ...prevCheckboxes,
          [category]: !prevCheckboxes[category],
        }));
      };
    
  

 

    return(

        
            <div className="container1">
                <h1 className="title">Task Pro - Organize Your Tasks Efficiently</h1>
                <h2 className="description">Welcome to Task Pro, your go-to platform for efficient task organization. With our user-friendly interface, you can easily create, manage,
                 and prioritize your tasks, ensuring that you stay on top of your daily activities. 
                </h2>
                <div className="cards-container">
                    <div className="checkbox-container " id="work">
                        <input
                        type="checkbox"
                        id="work"
                        className="color-checkbox"
                        checked={checkboxes.work}
                        onChange={() => handleCheckboxChange('work')}
                        />
                        <label htmlFor="work"></label>
                        <span className="checkbox-text">Work with groupe</span>
                    </div>
                    <div className="checkbox-container" id="projet">
                        <input
                        type="checkbox"
                        id="gestionProjet"
                        className="color-checkbox"
                        checked={checkboxes.gestionProjet}
                        onChange={() => handleCheckboxChange('gestionProjet')}
                        />
                        <label htmlFor="gestionProjet"></label>
                        <span className="checkbox-text">Project management</span>
                    </div>
                    <div className="checkbox-container" id="task">
                        <input
                        type="checkbox"
                        id="taskManager"
                        className="color-checkbox"
                        checked={checkboxes.taskManager}
                        onChange={() => handleCheckboxChange('taskManager')}
                        />
                        <label htmlFor="taskManager"></label>
                        <span className="checkbox-text">Task Manager</span>
                    </div>
                    <div className="checkbox-container" id="water">
                        <input
                        type="checkbox"
                        id="water"
                        className="color-checkbox"
                        checked={checkboxes.water}
                        onChange={() => handleCheckboxChange('water')}
                        />
                        <label htmlFor="water"></label>
                        <span className="checkbox-text">Remember to drink water</span>
                    </div>
                        
                   
                    

                   
                </div>
         
                <NavLink to="/signup">
                <button className="bt1">
                    
                    <div className="text">
                    <FontAwesomeIcon className="svg" icon={faArrowRight} />
                         Start
                         
                    </div>
                    
                </button>
                </NavLink>
                
                
                <div className="images1">
                    <img className="idk" src="./École_Nationale_des_Sciences_Appliquées_d'Oujda_logo.png" alt=".." />
                    <img className="idk" src="./ENSA Oujda.png" width={"500px"} alt=".." />
                    <img className="idk" src="./unnamed.png" alt=".." />
                    
                    
                </div>
                <div className="images">
                    <img className="idk" src="./1280px-Logo_Arts_et_Métiers.svg.png" alt=".." />
                    <img className="idk" src="./logo-janvier-2017.png" alt=".." />
                    <img className="idk" src="./INSEA_logo.png" alt=".." />
                </div>
                
            </div>
        
        
    )

}
export default Section1;