import React from 'react';
import User from './components/User'
import SearchRequest from './components/SearchRequest'
import SearchResults from './components/SearchResults';
import SingleItem from './components/SingleItem';
import SavedResults from './components/SavedResults'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>

        {/* <Route path='/' exact component={User} /> */}
        <Route path='/search' component={SearchRequest} />
        {/* <Route path='/results' component={SearchResults} />
        <Route path='/results/:id' component={SingleItem} />
        <Route path='/saved' component={SavedResults} /> */}

      </Switch>
      
    </div>
    
    </BrowserRouter>
  );
}

export default App;
