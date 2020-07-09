import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { handleReceiveTweets } from '../actions/tweets';
import { connect } from 'react-redux';

class Categories extends Component{
    constructor(props){
        super(props);
        this.redirectShoes = this.redirectShoes.bind(this)
        this.redirectBags = this.redirectBags.bind(this)
        this.redirectHair = this.redirectHair.bind(this)
        this.redirectFood = this.redirectFood.bind(this)

    }
    
    redirectShoes(){
        const value = "shoes";
        const location = "";
        this.props.dispatch(handleReceiveTweets({ value, location }))
            .then(this.props.history.push('/results'))
    }
    redirectBags(){
        const value = "bags";
        const location = "";
        this.props.dispatch(handleReceiveTweets({ value, location }))
            .then(this.props.history.push('/results'))
    }
    redirectHair(){
        const value = "hair";
        const location = "";
        this.props.dispatch(handleReceiveTweets({ value, location }))
            .then(this.props.history.push('/results'))
    }
    redirectFood(){
        const value = "food";
        const location = "";
        this.props.dispatch(handleReceiveTweets({ value, location }))
            .then(this.props.history.push('/results'))
    }


    render(){
        return(
            <div className="popular-categories">
                <h4>Popular Searches</h4>
                <div  className="category-section">
                    <div className="categories shoes" onClick={this.redirectShoes}>
                        <p>Shoes</p>
                    </div>
                    <div className="categories bags" onClick={this.redirectBags}>
                        <p>Bags</p>
                    </div>
                    <div className="categories hair" onClick={this.redirectHair}>
                        <p>Hair</p>
                    </div>
                    <div className="categories food" onClick={this.redirectFood}>
                        <p>Food</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(connect()(Categories));