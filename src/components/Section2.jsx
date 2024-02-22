import React from "react";
import '../css/Section2.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';
function Section2(){
    return(
        <>
        <section class="about" id="about">
       
        <div class="row">
          
          <div class="content">
            <h3>Use our mobile application</h3>
            <p>Our TaskPro mobile application is available, with the same functionalities integrated into our web application, so don't hesitate, now is the time!</p>
            <a class="playstore-button" href="#">
                <FontAwesomeIcon  className="svg" icon={faGooglePlay} />
                <span class="texts">
                    <span class="text-1">GET IT ON</span>
                    <span class="text-2">Google Play</span>
                </span>
            </a>
            
          </div>
          <div class="video-container">
            <img src="./task.jpg" alt="task" />
            
          </div>
            
        </div>
    
      </section>
      <section class="about1" >
       
        <div class="row1">
        <div class="video-container1">
            <img className="img1" src="./tasks.webp" alt="task" />
            
          </div>
          
          
          <div class="content4">
            <h3 className="title1">Work with a team</h3>
            <p className="paragraphe">Taskpro allows you to work and collaborate with other people, creating a group from which you can manage your tasks</p>
            
          </div>
          
        </div>
    
      </section>
      <section class="about2" >
       
       <div class="row2">
        
         
         <div class="content5">
           <h3 className="title2">Work with a team</h3>
           <p className="paragraphe1">Taskpro allows you to work and collaborate with other people, creating a group from which you can manage your tasks</p>
           
         </div>
         <div class="video-container2">
         <video className="vid" src="./jsp.mp4" alt="task" loop autoPlay muted></video>
           
         </div>
         
       </div>
   
     </section>
    </>
  
    );

}
export default Section2;