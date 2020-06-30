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
            <div>
                 <Card className="card" style={{ width: '18rem' }}>
                                <Card.Body>
                                    <Card.Title className="title-container"><input className="card-title" placeholder="Enter title here" id="title" name="title" onChange={this.handleTitle} value={this.state.title}></input></Card.Title>
                                    <Card.Text className="text-container">
                                        <textarea className="card-text" type="text" placeholder="Enter text here" id="note" name="note" onChange={this.handleChange} value={this.state.note}></textarea>
                                    </Card.Text>
                                    {/* <Card.Link href="#">Email notes</Card.Link> */}
                                </Card.Body>
                                <Button className="card-button" onClick={() => {this.props.handleCardSave(this.props.id, this.state)}}>Save</Button>
                                </Card>
            </div>
        )
    }
}
