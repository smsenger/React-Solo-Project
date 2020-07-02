import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './SearchRequest.css'
import { Link } from 'react-router-dom';

import fetchNewsAction from './thunkFetchNews';
import { newsApiError, newsApiSuccess, newsApiPending } from '../redux/reducers/newsreducer';

// import LoadingSpinner from './SomeLoadingSpinner';
import NewsResults from './NewsResults'

class SearchRequest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: ''
        }

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    shouldComponentRender() {
        const { pending } = this.props;
        if (this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        const { articles, error, pending } = this.props;

        if (!this.shouldComponentRender()) return <div>'Loading...'</div>//<LoadingSpinner />

        return (
            <Jumbotron className="jumbo-background">
                <h1 className="app-title">One Stop News</h1>
                <p>
                    <Link className="app-link" to="/" variant="primary">Home</Link>
                    <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
                    <Link className="app-link" to='/notes' variant="primary">Notes</Link>
                </p>
                <Form onSubmit={this.props.fetchNews}>
                    <Form.Label className="search-title" htmlFor="search">News Search</Form.Label>
                    <div className="form-div">
                        <Form.Control className="news-input" type="text" placeholder="search here" id="search" name="search" onChange={this.handleChange} value={this.state.search}></Form.Control>
                        <Button className="news-button" type="submit">Search</Button>
                    </div>
                </Form>
                {error && <span className='product-list-error'>{error}</span>}
                {this.props.articles.map((article) => {
                    return <NewsResults article={article} />

                })}
            </Jumbotron>
        )
    }
}


const mapStateToProps = state => ({
    articles: state.newsState.articles
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchNews: fetchNewsAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchRequest);