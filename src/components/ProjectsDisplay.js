import React from 'react';
import { PROJ } from '../shared/projects';
import { CardTitle, Badge } from 'reactstrap'


var projects=PROJ;

const ProjectsDisplay=(props)=>{
    var projs=projects.map((project)=>{
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
                                <div className="media-body text-right">
                                <CardTitle style={{fontSize: "24px",
                                borderBottom: "1px solid #ff9999"}}>{project.title}</CardTitle>
                                <span style={{color: "white",
                                fontWeight: "150"}}>{project.desc}</span>
                                <div>{"Tech Stack:  "}  
                                {   
                                    project.techstack.split(",").map((tech)=>{
                                        return(<Badge style={{backgroundColor: "transparent", border: "1px solid #5BB6CC"}} pill>{tech}</Badge>
                                        );
                                    })
                                }
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
            marginTop: "10%"
        }}>
            <div className="row">
                {projs}
            </div>
        </div>
    );
}

export default ProjectsDisplay;