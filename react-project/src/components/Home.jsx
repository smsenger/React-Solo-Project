import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import './Home.css'

export default function Home() {
    return (
        <div>
            <Jumbotron className="jumbo-background">
  <h1 className="app-title"><i>One_Stop</i></h1>
  <p className="app-subtitle">
    News, todos, and notes, all in one stop!
  </p>
  <p>
    <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
    <Link className="app-link" to="/searchrequest" variant="primary">News</Link>
    <Link className="app-link" to='/notes' variant="primary">Notes</Link>
  </p>
</Jumbotron>
        </div> 
    )
}
