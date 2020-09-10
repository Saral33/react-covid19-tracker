import React from 'react';
import './app.css';


const UIresult= (props)=> {

return(
    <div>
      <h3>Country:<span style={{color:"#192a56",marginLeft:"10px"}}>{props.UIdatas.Country} </span></h3>
      <h3>Total Confirmed Cases:<span style={{color:"#fbc531",marginLeft:"10px"}}>{props.UIdatas.TotalConfirmed} </span></h3>
      <h3>Total Recovery:<span style={{color:"#009432",marginLeft:"10px"}}>{props.UIdatas.TotalRecovered} </span></h3>
      <h3>Total Deaths:<span style={{color:"#EA2027",marginLeft:"10px"}}> {props.UIdatas.TotalDeaths}</span> </h3>
       <h3>Last Updated:<span style={{color:"#6F1E51",marginLeft:"10px"}}>{props.UIdatas.UpdateTime}</span> </h3>
 </div>
)

}


export default UIresult;