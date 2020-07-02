import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './Notes.css'
import GridLayout from 'react-grid-layout';

export default class NoteCard extends Component {
    constructor(props) {
        super(props);
        //ref to store the textInput DOM element
        this.textInput = React.createRef();

        this.state = {
            title: '',
            note: ''
        }
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
    const downloadData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(this.state.title + '\n' + this.state.note);
    return (
        <div>
            <div key="b" className="title-container"><input className="card-title" placeholder="Enter title here" id="title" name="title" onChange={this.handleTitle} value={this.state.title} style={{ borderRadius: '5px' }}></input></div>
            <Card.Text className="text-container">
                <textarea className="card-text" type="text" placeholder="Enter text here" id="note" name="note" onChange={this.handleChange} ref={this.textInput} value={this.state.note}></textarea>
            </Card.Text>
            <div className="top-div">
                <Button key='a' className="card-button1" onClick={() => { this.props.handleCardSave(this.props.id, this.state) }}>Save</Button>
                <Button href={downloadData} target="_blank" download="data.txt" className='card-button2' onClick={this.textToFile}>Export</Button>
            </div>
            {/* <Card.Link href="#">Email notes</Card.Link> */}
        </div>

    )
}
}
