import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SearchResults from './components/SearchResults';
import Landing from './components/Landing';
import { connect } from 'react-redux';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route path='/results' component={SearchResults} />
      </div>
    </Router>
  );
}

export default connect()(App);
