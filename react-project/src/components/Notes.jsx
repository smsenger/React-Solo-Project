import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';
import './Notes.css'
import { Responsive, WidthProvider } from 'react-grid-layout';
import ls from 'local-storage'
// 
const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Notes extends Component {
    state = {
        cards: [{
            title: '',
            notes: '',
        }],
    }

    handleCardSave = (id, data) => {
        const newCards = [...this.state.cards]
        const title = this.state.cards.title
        const notes = this.state.cards.notes
        newCards.splice(id, 1, data)
        this.setState({
            cards: newCards,
        })
        console.log(localStorage.setItem('cards', newCards))
        localStorage.setItem("title", title)
        console.log(title)

        localStorage.setItem('note', notes)
        console.log(notes)
    }

    componentDidMount() {
        const title = localStorage.getItem('title') === 'true';
        const notes = localStorage.getItem('note');
        // console.log(notes)
        this.setState({ notes, title });
      }

    handleCardDelete = (index) => {
        const survivingCards = this.state.cards.filter((index) => {
            return index !== index 
        })
        this.setState ({
            cards: survivingCards
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
                    <p className="app-subtitle">Save or export, all from one form!</p>
                    <p>
                        <Link className="app-link" to="/" variant="primary">Home</Link>
                        <Link className="app-link" to="/searchrequest" variant="primary">News</Link>
                        <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
                        <Link className="app-link" to='/email' variant="primary">Email</Link>
                        <br />
                        <Button className="app-link" onClick={this.createCard}>Create card</Button>
                    </p>
                    <ResponsiveGridLayout name='card' className="layout"
                        breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                        cols={{lg: 8, md: 4, sm: 4, xs: 2, xxs: 2}}>
                        {this.state.cards.map((card, index) => {
                            return (
                                <div  data-grid={{ i: 'c', x: 4, y: 0, w: 2, h: 1.5 }} key={index} >
                                    <NoteCard  handleCardSave={this.handleCardSave} handleCardDelete={this.handleCardDelete} data={card} id={index}/>
                                </div>
                            )
                        })}
                    </ResponsiveGridLayout>
                </Jumbotron>

            </div>
        )
    }
}
