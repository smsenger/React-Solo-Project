import React, { Component } from 'react'
const puppeteer = require('puppeteer');
const $ = require('cheerio');

export default class SearchRequest extends Component {
    state = {
        search: '', 
        results: ''
    }
    
    handleSubmit = (e) => {
        const url = `https://www.wayfair.com/$keyword.php?keyword=${search}&class_id=`;
    puppeteer
    .launch()
    .then(function(browser) {
      return browser.newPage();
    })
    .then(function(page) {
      return page.goto(url).then(function() {
        return page.content();
      });
    })
    .then(function(html) {
      $('h2', html).each(function() {
        console.log($(this).text());
      });
    })
    .catch(function(err) {
      //handle error
    });
}

handleChange = (e) => {
    const { search, value } = e.target;
    this.setState({
      [search]: value
    })
  }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search">Search for products</label>
                    <input id="search" name="search" onChange={this.handleChange} value={this.state.search}></input>
                    <button>Search</button>
                </form>

                {this.state.search.map(result => {
                            return <SearchResults result={text} />
                        })}
                </div>
            </div>
        )
    }
}
