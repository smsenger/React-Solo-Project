import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';
import './Notes.css'

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
            cards: [...this.state.cards, {title: '', note: ''}]
        })
    }



    render() {
        return (
            <div>
                <Jumbotron className="jumbo-background">
                    <h1 className="app-title"><i>One_Stop</i> Notecards</h1>
                    <p>
                        <Link className="app-link" to="/" variant="primary">Home</Link>
                        <Link className="app-link" to="/searchrequest" variant="primary">News</Link>
                        <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
                        <br/>
                        <Button className="app-link" onClick={this.createCard}>Create note card</Button>
                    </p>
                        {this.state.cards.map((card, index) => {
                            return (
                           <NoteCard handleCardSave={this.handleCardSave} data={card} id={index}/>
                            )})}        
                </Jumbotron>

            </div>
        )
    }
}
