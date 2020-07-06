import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './Notes.css'
import Emoji from './Emoji'

export default class NoteCard extends Component {
    state = {
        title: '',
        note: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        }) 
    }

        render() {
            const downloadData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(this.state.title + '\n' + this.state.note);
            return (
                <div name='cards'>
                    <div key="b" className="title-container"><input className="card-title" placeholder="Enter title here" id="title" name="title" onChange={this.handleChange} value={this.state.title} style={{ borderRadius: '5px' }}></input></div>
                    <Card.Text className="text-container">
                        <textarea className="card-text" type="text" placeholder="Enter text here" id="note" name="note" onChange={this.handleChange} value={this.state.note}></textarea>
                    </Card.Text>
                    <div className="button-div">
                        <Emoji />
                        <Button className="card-button1" onClick={() => { this.props.handleCardSave(this.props.id, this.state) }}>Save</Button>
                        <Button href={downloadData} target="_blank" download="data.txt" className='card-button2' onClick={this.textToFile}>Export</Button>
                        <Button className="card-button4" onClick={() => { this.props.handleCardDelete(this.props.id, this.state) }}>Delete</Button>
                    </div>
                </div >

            )
        }
    }
