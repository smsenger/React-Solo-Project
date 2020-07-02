import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import SearchRequest from './components/SearchRequest'
import TodoForm from './components/TodoForm';
import TaskList from './components/TaskList';
import Notes from './components/Notes'
import './App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/searchrequest' component={SearchRequest} />
          <Route path='/todoform' component={TodoForm} />
          <Route path='/tasklist' component={TaskList} />
          <Route path='/notes' component={Notes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
