import React, { Component } from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state={
        value: ''
    }
    
    handleChange(value){
        this.setState({
            value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state.value)
    }
    render(){
        const value = this.state.search
        return(
            <div className="search-bar">
                    <input
                        type="text"
                        placeholder="What can we help you find today?"
                        value= { value }
                        onChange={(e)=>this.handleChange(e.target.value)}
                        className="search-input"
                    />
                    <div onClick={this.handleSubmit} className="search-div"><i className="fa fa-search" aria-hidden="true"></i></div>
            </div>
        )
    }
}

export default Search;