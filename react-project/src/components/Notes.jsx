import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';
import './Notes.css'
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Notes extends Component {
    state = {
        cards: [{
            title: '',
            notes: '',
        }]
    }

    handleCardSave = (id, data) => {
        const newCards = [...this.state.cards]
        newCards.splice(id, 1, data)
        this.setState({
            cards: newCards
        })
    }

    createCard = () => {
        this.setState({
            cards: [...this.state.cards, { title: '', note: '' }]
        })
    }



    render() {
        return (
            <div>
                <Jumbotron className="jumbo-background">
                    <h1 className="app-title"><i>One_Stop</i> Notecards</h1>
                    <p>Save, export, or email, all from one form!</p>
                    <p>
                        <Link className="app-link" to="/" variant="primary">Home</Link>
                        <Link className="app-link" to="/searchrequest" variant="primary">News</Link>
                        <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
                        <br />
                        <Button className="app-link" onClick={this.createCard}>Create card</Button>
                    </p>
                    <ResponsiveGridLayout className="layout"
                        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                        cols={{lg: 4, md: 4, sm: 4, xs: 4, xxs: 4}}>
                        {this.state.cards.map((card, index) => {
                            return (
                                <div data-grid={{ i: 'c', x: 4, y: 0, w: 1, h: 1 }} key={index} >
                                    <NoteCard handleCardSave={this.handleCardSave} data={card} id={index}/>
                                </div>
                            )
                        })}
                    </ResponsiveGridLayout>
                </Jumbotron>

            </div>
        )
    }
}
