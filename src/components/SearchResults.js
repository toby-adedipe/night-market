import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';

class SearchResults extends Component{
    state={
        tweets:[]
    }
    componentDidMount(){
        
    }
    render(){
        const { tweets } = this.props.tweets
        let Info;
        if (tweets && tweets[0]){
            Info = <p className="search-info">Tap to take you to the tweet</p>
        }else{
            Info = <p className="search-info">No tweets to see here</p>

        }
        return(
            <div className="search-results">
                <Search />
                {Info}
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