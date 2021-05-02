import React, { useState } from 'react';
import { EXP } from '../shared/experience';
import { Card, CardTitle, CardBody, CardSubtitle, Badge, CardText } from 'reactstrap'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
  } from 'reactstrap';

import '../experience.css'
import Avatar from 'react-avatar';




var exp=EXP;

const ExperienceDisplay = (props)=>{

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === exp.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? exp.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }



    var experiences=exp.map((experience)=>{
        return(
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={experience.organization}

            >
                <Card style={{backgroundColor: "#111", marginBottom:"30px", 
                        marginTop:"25px", borderLeft:"6px solid rgb(0,154,217)"}}                 
                        className="ml-auto mr-auto fancy_card">
                    <CardBody
                        >
                        <div className="row" style={{borderBottom: "1px solid #ff9999"}}>
                            <div className="col-4">
                                <Avatar className="ml-auto mr-auto" src={experience.logo} 
                                    style={{justifyContent: "center",display: "flex",
                                    marginBottom:"10px"}} 
                                    round={true} alt={"profilePic"} />
                            </div>
                            <div className="col-8">
                            <CardTitle style={{fontSize: "150%", color:"white", 
                                fontWeight:"150",
                                position: "relative", height: "100px"}}>
                                    {experience.organization}
                            </CardTitle>
                            </div>
                        </div>
                        <div className="row ml-auto">
                        <CardText style={{color: "white", fontSize: "20px", marginBottom:"5px",fontWeight: "150"}}>{experience.role}</CardText>
                        </div>
                        <div className="row ml-auto">
                        <CardSubtitle style={{color: "#818181", marginBottom:"0px"}}>{experience.from}-{experience.to?experience.to:"present"}</CardSubtitle>
                        </div>
                        <div className="row ml-auto">
                        <Badge color="success" pill>Duration: {experience.duration}</Badge>
                        </div>
                    </CardBody>
                </Card>
            </CarouselItem>
        );
    });



    return(
        <div className="container ">

            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                interval={false}
                
                >
                {/* <CarouselIndicators items={exp} 
                    activeIndex={activeIndex} 
                    onClickHandler={goToIndex} 
                    /> */}
                    {experiences}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>

    );
}


export default ExperienceDisplay;