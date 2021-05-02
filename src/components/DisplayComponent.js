import React, { Component } from 'react';
import EducationDisplay from './EducationDisplay';
import ExperienceDisplay from './ExperienceDisplay';
import ProjectsDisplay from './ProjectsDisplay';
import AcpDisplay from './AcpDisplay';
import SkillDisplay from './SkillDisplay';

class Display extends Component {


    constructor(props){
        super(props);
        this.state={
        };
    }



    


    render(){
        if(this.props.selected==="education"){
            return(


                    <div className="col-9 education display">
                        
                        {/* <div className="row">
                            <h1 className=" container-fluid edu">Education</h1>
                        </div> */}

                        <div className="row">
                            <EducationDisplay/>
                        </div>
                        
                    </div>   
            );
        }
        else if(this.props.selected==="experience"){
            return(

                    <div className="col-9 experience display">
                        {/* <div className="row">
                            <h1 className="row col edu">Experience</h1>
                        </div> */}
                        <div className="row" style={{marginTop: "16%"}}>
                            <ExperienceDisplay/>
                        </div>
                    </div>   

            );
        }
        else if(this.props.selected==="projects"){
            return(   

                <div className="col-9 display" >
                    <ProjectsDisplay/>
                </div>
            );
        }
        else if(this.props.selected==="acp"){
            return(
                <div className="col-9 display">


                    <AcpDisplay/>

                </div>
            );
        }
        else if(this.props.selected==="skills"){
            return(
                <div className="col-9 display">
                    <SkillDisplay/>
                </div>

            )
        }

    }
}


export default Display;