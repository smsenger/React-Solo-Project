import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Link } from 'react-router-dom';
import NoteCard from './NoteCard';
import './Notes.css'
import { Responsive, WidthProvider } from 'react-grid-layout';
import { connect } from 'react-redux';
import { addCard } from '../redux/actions/notesActions';
// 
const ResponsiveGridLayout = WidthProvider(Responsive);

class Notes extends Component {
    state = {
        cards: [],
    }


    render() {
        return (
            <div>
                <Jumbotron className="jumbo-background">
                    <h1 className="app-title"><i>One_Stop</i> Notecards</h1>
                    <p className="app-subtitle">Flexibly format text boxes, save or export text, all in one place!</p>
                    <p>
                        <Link className="app-link" to="/" variant="primary">Home</Link>
                        <Link className="app-link" to="/searchrequest" variant="primary">News</Link>
                        <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
                        <Link className="app-link" to='/email' variant="primary">Email</Link>
                        <br />
                        <Button className="app-link" onClick={() => { this.props.addCard() }}>Create card</Button>
                    </p>
                    <ResponsiveGridLayout name='card' className="layout"
                        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                        cols={{ lg: 8, md: 4, sm: 4, xs: 2, xxs: 2 }}>
                        {this.props.cards.map((card, index) => {
                            return (
                                <div data-grid={{ i: 'c', x: 4, y: 0, w: 2, h: 1.5 }} key={index} >
                                    <NoteCard data={card} id={index} />
                                </div>
                            )
                        })}
                    </ResponsiveGridLayout>
                </Jumbotron>

            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return {
        cards: state.notesState.cards
    }
}

const mapDispatchToProps = {
    addCard,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Notes)