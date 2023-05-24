import React from "react";
// import { useNavigate } from 'react-router-dom';
import Footer from "./Navigation/Footer";
import Navbar from "./Navigation/Navbar";
import {AiFillGithub, AiFillPlayCircle} from 'react-icons/ai'




function Portfolio(){
     const handleGitJobs = () => {
        window.location.replace('https://frozen-refuge-21679.herokuapp.com', '_blank');
     }
     const handleGitJobsRepo = () => {
        window.location.replace('https://github.com/Group4-finalPoject/project_job_board', '_blank');
     }
     const handleWeather = () => {
        window.location.replace('https://jshvaron.github.io/rainOrShine/', '_blank');
     }
     const handleWeatherRepo = () => {
        window.location.replace('https://github.com/jshvaron/rainOrShine', '_blank');
     }
     const handleScheduler = () => {
        window.location.replace('https://jshvaron.github.io/LeSchedule/', '_blank');
     }
     const handleSchedulerRepo = () => {
        window.location.replace('https://github.com/jshvaron/LeSchedule', '_blank');
     }
     const handleNoteTaker = () => {
        window.location.replace('https://mini-eureka.herokuapp.com/', '_blank');
     }
     const handleNoteTakerRepo = () => {
        window.location.replace('https://github.com/jshvaron/miniature-eureka', '_blank');
     }
     const handleEMPRepo = () => {
        window.location.replace('https://github.com/jshvaron/employee-management-portal', '_blank');
     }
     const handleGenRepo = () => {
        window.location.replace('https://github.com/jshvaron/genesis-readme', '_blank');
     }

     
    return (
        <>
            <Navbar />
            <div className="PortfolioPage">
                <container className='PortfolioContainer'>
                    <card className='Project-1 p1'>
                    <p className="layer">
                            <p>GitJobs</p>
                        <section>
                        <AiFillPlayCircle className="p-icon" onClick={handleGitJobs}/>
                        <AiFillGithub className="p-icon"onClick={handleGitJobsRepo}/>  
                        </section>   
                        </p>
                    </card>
                    <card className='Project-2 '>
                    
                        <p className="layer">
                            <p>Weather</p>
                        <section>
                        <AiFillPlayCircle className="p-icon" onClick={handleWeather}/>
                        <AiFillGithub className="p-icon" onClick={handleWeatherRepo}/>  
                        </section>   
                        </p>

                        
                    </card>
                    <card className='Project-3'>
                    <p className="layer">
                            <p>Scheduler</p>
                        <section>
                        <AiFillPlayCircle className="p-icon"onClick={handleScheduler}/>
                        <AiFillGithub className="p-icon" onClick={handleSchedulerRepo}/>  
                        </section>   
                        </p>
                        
                    </card>
                    <card className='Project-4'>
                    <p className="layer">
                            <p>Note Taker</p>
                        <section>
                        <AiFillPlayCircle className="p-icon" onClick={handleNoteTaker}/>
                        <AiFillGithub className="p-icon" onClick={handleNoteTakerRepo}/>  
                        </section>   
                        </p>
                       
                    </card>
                    <card className='Project-5'>
                    <p className="layer">
                            <p>EMP</p>
                        <section>
                        {/* <AiFillPlayCircle className="p-icon"/> */}
                        <AiFillGithub className="p-icon" onClick={handleEMPRepo}/>  
                        </section>   
                        </p>
                         
                    </card>
                    <card className='Project-6'>
                    <p className="layer">
                            <p>Genesis</p>
                        <section>
                        {/* <AiFillPlayCircle className="p-icon"/> */}
                        <AiFillGithub className="p-icon" onClick={handleGenRepo}/>  
                        </section>   
                        </p>
                        
                    </card>
                </container>
            </div>
            <Footer />
        </>
    )
}

export default Portfolio;