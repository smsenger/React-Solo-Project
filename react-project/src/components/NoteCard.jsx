import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './Notes.css'

export default class NoteCard extends Component {
    state = {
        title: '',
        note: ''
    }

    handleTitle = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
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
            <div className="grid-stack">
                <Card className="card grid-stack-item" style={{ width: '13rem' }}>
                    <Card.Body className="grid-stack-item-content">
                        <Card.Title className="title-container grid-stack-item-content"><input className="card-title" placeholder="Enter title here" id="title" name="title" onChange={this.handleTitle} value={this.state.title}></input></Card.Title>
                        <Card.Text className="text-container grid-stack-item-content">
                            <textarea className="card-text" type="text" placeholder="Enter text here" id="note" name="note" onChange={this.handleChange} value={this.state.note}></textarea>
                        </Card.Text>
                        {/* <Card.Link href="#">Email notes</Card.Link> */}
                    <Button className="card-button grid-stack-item-content" onClick={() => { this.props.handleCardSave(this.props.id, this.state) }}>Save</Button>
                    </Card.Body>
                </Card>
            </div>

        )
    }
}
