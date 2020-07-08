import React, { Component } from 'react';
import Search from './Search';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class SearchResults extends Component{
    state={
        tweets:[]
    }
    componentDidMount(){
        
    }
    render(){
        const { tweets } = this.props.tweets
        return(
            <div>
                <Search />
                {tweets && tweets[0] && 
                    Object.keys(tweets).map(id=>(
                        <a key={id} href={tweets[id].link} rel="noopener noreferrer" target="_blank">
                            <div className="tweets" >
                                <p>Vendor: <span>@{tweets[id].username}</span></p>
                                <p>Description: {tweets[id].tweet}</p>
                                <p>Date: {tweets[id].datestamp}</p>
                                <p>Time: {tweets[id].timestamp}</p>
                            </div>
                        </a>
                        
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(tweets){
    return {
        tweets,
    }
}

export default connect(mapStateToProps)(SearchResults);