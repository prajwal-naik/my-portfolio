import React from 'react';
import { SKILLS } from '../shared/skills';
import { CardTitle, Badge } from 'reactstrap';

var skills=SKILLS;



const SkillDisplay=(props)=>{

    var s=skills.map((skill)=>{
        return(
            <div className="col-xl-4 col-sm-6 col-12"  style={{marginTop: "10px", marginBottom: "10px"}}>
                <div className="card fancy_card" style={{height: "100%",
                      backgroundColor: "#17141d",
                      boxShadow: "1rem 1rem 3rem #000",
                      borderRight: "6px solid rgb(0,154,217)"
                    }}>
                    <div className="card-content"
                        style={{color: "white"}}>
                        <div className="card-body">
                            <div className="media d-flex">
                                <div className="media-body text-left">
                                    {/* <CardTitle style={{fontSize: "20px", fontWeight: "150"}}>
                                        {skill.skill}
                                    </CardTitle>
                                    <span className={skill.icon}></span> */}
                                    <div className="row">
                                        {/* <div className="col-4" style={{ Color:"white" }} >
                                            <span className={skill.icon}></span>
                                        </div> */}
                                        <div className="col-12">
                                        <CardTitle style={{fontSize: "20px", fontWeight: "150"}}>
                                        {skill.skill}
                                    </CardTitle>
                                        </div>
                                    </div>


                                    <div> 
                                        <Badge style={{backgroundColor: "transparent", border: "1px solid #5BB6CC"}} pill>{skill.proficiency+"%"}</Badge>
                                    </div>
                                    <div className="progress mt-1 mb-0" style={{height: "3px"}}>
                                        
                                        <div className="progress-bar bg-success" 
                                            role="progressbar" 
                                            style={{width: skill.proficiency+"%"}} 
                                            ariaValueNow="0" ariaValueMin="0" ariaValueMax="100">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    });


    return(
        <div className="container" style={{
            marginTop: "4%"
            }}>
            <div className="row">
                {s}
            </div>
        </div>

    );
}

export default SkillDisplay;

