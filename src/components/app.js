import React, { Component } from 'react';
import InputSearch from './InputSearch';
import UIresult from './UI';
import './app.css';



class App extends Component{
   
    state= {
        Country:"",
        TotalConfirmed:null,
        
        TotalDeaths:null,
        TotalRecovered:null,
        UpdateTime:""

 }
    

     SearchCountry = async (query)=>{
         document.querySelector('.loader').style.display='block';
         
        const response= await fetch(`https://api.covid19api.com/summary`);
        const data= await response.json();
     const countryArr=data.Countries.find(
        function(i){
        return (i.Country==query || i.Slug==query)
        });
     
     const updatedTime= (countryArr.Date.split('T')[0]);
     
     
     document.querySelector('#input-field').value="";
     document.querySelector('.loader').style.display='none';
     this.setState({ 
                    Country:countryArr.Country,
                     TotalConfirmed:countryArr.TotalConfirmed,             
                    TotalDeaths: countryArr.TotalDeaths,
                    TotalRecovered: countryArr.TotalRecovered,
                    UpdateTime:updatedTime
 })  
}
     render(){
       return(
            <div className="container-data">
            <h2>Covid-19 Tracker</h2>
            <InputSearch searchTerms={this.SearchCountry}/>
            <UIresult UIdatas={this.state}/>
            </div> )
    }
}





export default App;


