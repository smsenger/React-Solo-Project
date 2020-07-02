import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsResults from './NewsResults'
import { newsApiPending, newsApiSuccess, newsApiError, updateArticles } from '../redux/actions/newsactions';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './SearchRequest.css'

class SearchRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(`http://newsapi.org/v2/everything?q=${this.state.search}&sortBy=publishedAt&apiKey=0771a8ddf997481c9b36598da32fcb6d`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          search: '',
        }, () => {
          this.props.updateArticles(data.articles ? data.articles : [])
        })
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
          <h1 className="app-title"><i>One_Stop</i> News</h1>
          <p>
            <Link className="app-link" to="/" variant="primary">Home</Link>
            <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
            <Link className="app-link" to='/notes' variant="primary">Notes</Link>
          </p>
          <Form onSubmit={this.handleSubmit}>
            <Form.Label className="search-title" htmlFor="search">News Search</Form.Label>
            <div className="form-div">
              <Form.Control className="news-input" type="text" placeholder="search here" id="search" name="search" onChange={this.handleChange} value={this.state.search}></Form.Control>
              <Button className="news-button" type="submit">Search</Button>
            </div>
          </Form>
          {this.props.articles.map((article) => {
            return <NewsResults article={article} />

          })}
        </Jumbotron>

      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  articles: state.newsState.articles
})

const mapDispatchToProps = {
  updateArticles
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SearchRequest)