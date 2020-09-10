import React, { Component } from 'react';
import './app.css';

class InputSearch extends Component{
state={ terms:''};

OnButtonClick =(e)=> {
    e.preventDefault();
   this.props.searchTerms(this.state.terms);
}



render(){

    return(
        <div>
            <form className="form">
                <input type="text" placeholder="Enter Country name"  value={this.state.terms} onChange={(e)=>this.setState({terms:e.target.value})} ></input>
                
                <button onClick={this.OnButtonClick}>Search</button>
                </form>
        </div>
    )
}

}


export default InputSearch;