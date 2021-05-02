import React, { Component } from 'react';
import { UncontrolledCollapse, Card, CardTitle, CardBody } from 'reactstrap'
import Avatar from 'react-avatar';



class SideBar extends Component {
    constructor(props){
        super(props);
        this.state={
            isActive: "education",
            isAboutMeOpen: false
        };
        this.toggleAboutMe=this.toggleAboutMe.bind(this);
        this.changeActiveLink=this.changeActiveLink.bind(this);
    }

    componentDidMount(){
        let activeLinkEle=document.getElementById(this.state.isActive);
        activeLinkEle.style.color="white";
    }

    toggleAboutMe=async() => {
        // console.log(this.state);
        await this.setState({isAboutMeOpen: !this.state.isAboutMeOpen});
        // console.log(this.state);
        let aboutMe=document.getElementById("aboutMeToggler");
        let caret=document.getElementById("dropDownCaret")
        if(this.state.isAboutMeOpen){
            aboutMe.style.color="white";
            caret.className="fa fa-caret-up mr-auto";
        }
        else{
            aboutMe.style={
                color: "#f1f1f1",
                textDecoration: "none"
            };
            caret.className="fa fa-caret-down caret mr-auto";
        }
    }

    
    changeActiveLink=async(id)=>{
        let prev=this.state.isActive;
        let prevActive=document.getElementById(prev);
        let activeLinkEle=document.getElementById(id);
        await this.setState({isActive: id});
        prevActive.style={
            color: "#f1f1f1",
            textDecoration: "none"
        };
       activeLinkEle.style.color="white";
    }


    render(){
        return(
            <div id="mySidenav" className="sidenav col-3">
                <Card style={{backgroundColor: "#111", marginBottom:"30px", 
                        marginTop:"25px", borderBottom:"1px solid #ff9999", 
                        borderBottomRightRadius:"0px", borderBottomLeftRadius: "0px"}}>
                <Avatar className="ml-auto mr-auto" src="/assets/images/me.jpg" style={{justifyContent: "center",display: "flex",
                        marginBottom:"10px"}} 
                        round={true} alt={"profilePic"} />
                    <CardBody style={{padding: "8px", paddingBottom: "0px"}} className="ml-auto mr-auto">
                        <CardTitle style={{fontSize: "35px"}}>Prajwal K Naik</CardTitle>
                    </CardBody>
                </Card>

                <a href="/#" id="aboutMeToggler" onClick={this.toggleAboutMe}>About me <span id="dropDownCaret" className="fa fa-caret-down caret mr-auto"></span></a>
                <UncontrolledCollapse toggler="#aboutMeToggler">
                    <Card style={{backgroundColor: "#111", marginBottom:"15px"}}>
                        <CardBody>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
                        similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
                        dignissimos esse fuga! Minus, alias.
                        <a href='/assets/Resume.pdf' download>Resume</a>
                        </CardBody>
                    </Card>
                </UncontrolledCollapse>

                <a href="/#" id="education" onClick={()=>{this.props.changeDisplay("education"); this.changeActiveLink("education")}}>Education</a>
                <a href="/#" id="experience" onClick={()=>{this.props.changeDisplay("experience"); this.changeActiveLink("experience")}}>Experience</a>
                <a href="/#" id="projects" onClick={()=>{this.props.changeDisplay("projects"); this.changeActiveLink("projects")}}>Projects</a>
                <a href="/#" id="acp" onClick={()=>{this.props.changeDisplay("acp"); this.changeActiveLink("acp")}}>Awards & Certifications</a>
                <a href="/#" id="skills" onClick={()=>{this.props.changeDisplay("skills"); this.changeActiveLink("skills")}}>Skills</a>
            </div>
        );
    }
}


export default SideBar;