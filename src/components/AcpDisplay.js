import React from 'react';
import { ACP } from '../shared/awards';
import { CardTitle, Badge } from 'reactstrap';
var acps=ACP;

const AcpDisplay=(props)=>{


    var awards=acps.map((acp)=>{
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
                                <CardTitle style={{fontSize: "20px", fontWeight: 150,
                                borderBottom: "0.5px solid #ff9999"}}>{acp.name}</CardTitle>
                                <a href={acp.link} 
                                    style={{color: "white",
                                    fontWeight: "100"}}
                                    target="popup"
                                    onclick="window.open({acp.link}, 'popup', 'width=600, height=600'); return false">
                                        {acp.link}
                                </a>
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
            marginTop: "5%"
            }}>
            <div className="row">
                {awards}
            </div>
        </div>

    );
}

export default AcpDisplay;
