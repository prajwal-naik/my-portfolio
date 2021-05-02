import React, { Component } from 'react';
import { EDU } from '../shared/education';
import { Card, CardTitle, CardBody, CardSubtitle, Badge, CardText } from 'reactstrap'
import '../education.css'
import Avatar from 'react-avatar';




var edu=EDU.reverse();

class EducationDisplay extends Component {
    constructor(props){
        super(props);
        this.state={

        };
    }




    render(){
        var schools=edu.map((school)=>{
            return(
                
                <Card style={{backgroundColor: "#111", marginBottom:"30px", 
                        marginTop:"25px", borderLeft:"6px solid rgb(0,154,217)"}}>

                    <CardBody style={{padding: "8px", paddingBottom: "8px"}} 
                        className="ml-auto mr-auto">
                        <div>
                        <CardTitle style={{fontSize: "30px", color:"white", 
                            fontWeight:"150", borderBottom: "1px solid #ff9999",
                            position: "relative", height: "100px"}}>
                                {school.institute}
                        </CardTitle>
                        </div>
                        <Avatar className="ml-auto mr-auto" src={school.logo} 
                            style={{justifyContent: "center",display: "flex",
                            marginBottom:"10px"}} 
                            round={true} alt={"profilePic"} />
                        <CardText style={{color: "white", fontSize: "20px", marginBottom:"5px",fontWeight: "150"}}>{school.degree}</CardText>
                        <CardSubtitle style={{color: "#818181", marginBottom:"0px"}}>{school.from}-{school.to?school.to:"present"}</CardSubtitle>
                        <Badge color="success" pill>Outcome: {school.outcome}</Badge>
                    </CardBody>
                </Card>
                
            );
        });



        return(
            <div className="container">
                {/* <Carousel slides={slides} repeat={false}/> */}
                <div className="row ml-auto mr-auto">
                    {schools}
                </div>
            </div>
        );
    }
}


export default EducationDisplay;