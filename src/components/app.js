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
        UpdateTime:"",
        query:''

 }

   loaderController= (action)=> {
     if(action==='put'){document.querySelector('.loader').style.display='block';}
      if(action==='remove'){document.querySelector('.loader').style.display='none';}
   }
    

     SearchCountry = async (query)=>{
       
       if(query!=''){
        console.log(query);
       try{
          document.querySelector('.error__message').style.display='none';
           this.loaderController('put');
        const response= await fetch(`https://api.covid19api.com/summary`);
        const data= await response.json();
     const countryArr=data.Countries.find(
        function(i){
        return (i.Country==query || i.Slug==query)
        });
        const updatedTime= (countryArr.Date.split('T')[0]);
     document.querySelector('#input-field').value="";
     this.loaderController('remove');
     this.setState({ 
                    Country:countryArr.Country,
                     TotalConfirmed:countryArr.TotalConfirmed,             
                    TotalDeaths: countryArr.TotalDeaths,
                    TotalRecovered: countryArr.TotalRecovered,
                    UpdateTime:updatedTime,
                    
 })  }
 catch(e){
      document.querySelector('.error__message').style.display='block';
     this.loaderController('remove');
     document.querySelector('#input-field').value="";
     this.setState({
      Country:"",
        TotalConfirmed:null,
        TotalDeaths:null,
        TotalRecovered:null,
        UpdateTime:"",
        query:query
    })
 }}
}
     
     render(){
       return(
            <div className="container-data">
            <h2>Covid-19 Tracker</h2>
            <InputSearch searchTerms={this.SearchCountry}/>
            <UIresult UIdatas={this.state} />
            </div> )
    }
}





export default App;


