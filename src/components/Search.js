import React, { Component } from 'react';
import { handleReceiveTweets } from '../actions/tweets';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Search extends Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state={
        value: '',
        tweets:[]
    }
    
    handleChange(value){
        this.setState({
            value
        })
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.dispatch(handleReceiveTweets(this.state.value))
            .then(this.props.history.push('/results'))
    }

    render(){
        const value = this.state.search
        return(
            <div className="search-bar">
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="What can we help you find today?"
                            value= { value }
                            onChange={(e)=>this.handleChange(e.target.value)}
                            className="search-input"
                        />
                        <div onClick={this.handleSubmit} className="search-div"><i className="fa fa-search" aria-hidden="true"></i></div>
                    </form>
            </div>
        )
    }
}

export default withRouter(connect()(Search));