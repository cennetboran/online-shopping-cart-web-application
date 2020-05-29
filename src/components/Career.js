import React, {Component} from "react"
import img from "../images/team1.jpg"
import "./Components.css"
import Navbar from "./Navbar"
import JobContent from "./JobContent"
import Footer from "./Footer"

class Career extends Component{

    state ={
        jobs : [
            {
                jobTitle: "React Develoder",
                jobContent:"React Axios",
                jobURL:"https://boards.greenhouse.io/mixtiles/jobs/4325327002?gh_jid=4325327002"
            },
            {
                jobTitle: "React Develoder",
                jobContent:"React Axios",
                jobURL:"https://boards.greenhouse.io/mixtiles/jobs/4325327002?gh_jid=4325327002"
            }

        ]
    }

    render(){
        const {jobs} = this.state
        return(
            <div>
                <Navbar/>
                <div className="img-center">
                    <img className="video-fluid" src={img} alt="..."/>
                    <br/>
                    <br/>
                    <br/>
                    {
                        jobs.map(job => {
                            return(
                              <JobContent
                                jobTitle = {job.jobTitle}
                                jobContent = {job.jobContent}
                                jobURL = {job.jobURL}
                              />
                            )
                          })
                    }
                   
                    <br/>
                    <Footer/>
                    <br/>
                
                </div>
                        
                    
            </div>
        )
    }
}export default Career