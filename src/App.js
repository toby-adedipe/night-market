import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import Landing from './components/Landing';
import { connect } from 'react-redux';
import Header from './components/Header';
import LoadingBar from 'react-redux-loading';

function App() {
  return (
    <Router>
      <LoadingBar />
      <div className="App">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route path='/results' component={SearchResults} />
      </div>
    </Router>
  );
}

export default connect()(App);
