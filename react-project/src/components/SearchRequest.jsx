import React, { Component } from 'react'
import NewsResults from './NewsResults'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './SearchRequest.css'
import { Link } from 'react-router-dom';

export default class SearchRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            articles: []
    }
}



handleSubmit = (e) => {
  e.preventDefault()
  // let ymd = getFullYear() + '-' + getDate() 
    fetch(`http://newsapi.org/v2/everything?q=${this.state.search}&sortBy=publishedAt&apiKey=0771a8ddf997481c9b36598da32fcb6d`)
        .then(res => res.json())
        .then(data => {
            this.setState({
                articles: data.articles ? data.articles : []
            });
            console.log(data)
        })
}

handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

    render() {
        return (
            <div>
            <Jumbotron className="jumbo-background">
            <h1 className="app-title">One Stop News</h1>
            <p>
              <Link className="app-link" to="/" variant="primary">Home</Link>
              <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
              <Link className="app-link" to='/notes' variant="primary">Notes</Link>
            </p>
          </Jumbotron>
                 <Form onSubmit={this.handleSubmit}>
                    <Form.Label className="search-title" htmlFor="search">News Search</Form.Label>
                    <div className="form-div">
                    <Form.Control className="news-input" type="text" placeholder="search here" id="search" name="search" onChange={this.handleChange} value={this.state.search}></Form.Control>
                    <Button className="news-button" type="submit">Search</Button>
                    </div>
                </Form>
                {this.state.articles.map((article) => {
                  return <NewsResults article={article} />
                  
                })}

            </div>
        )
    }

  }