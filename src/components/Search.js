import React, { Component } from 'react';
import { handleReceiveTweets } from '../actions/tweets';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Search extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
    }
    state={
        text: '',
        value:'',
    }
    
    handleChange(text){
        this.setState({
            text
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const value = this.state.text;
        const location = this.state.value
        this.props.dispatch(handleReceiveTweets({ value, location }))
            .then(this.props.history.push('/results'))
    }
    handleSelection(event){
        this.setState({
            value: event.target.value
        })
    }

    render(){
        const text = this.state.text
        return(
            <div className="search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="What can we help you find today?"
                            value= { text }
                            onChange={(e)=>this.handleChange(e.target.value)}
                            className="search-input"
                        />
                        <select onChange={this.handleSelection}>
                            <option defaultValue
                                value=""
                            >Pick a state
                            </option>
                            <option
                                value="lagos"
                            >Lagos
                            </option>
                            <option
                                value="abuja"
                            >Abuja
                            </option>
                            <option
                                value="rivers"
                            >Rivers
                            </option>
                            <option
                                value="oyo"
                            >Oyo
                            </option>   
                        </select>
                        <div onClick={this.handleSubmit} className="search-div"><i className="fa fa-search" aria-hidden="true"></i></div>
                    </form>
            </div>
        )
    }
}

export default withRouter(connect()(Search));