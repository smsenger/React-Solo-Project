import React, { Component } from 'react';
import './Task.css';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class TaskNotes extends Component {
    state = {
        notes: ''
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { addNotes } = this.props;

        return (
            <div className="Task">
    <Form onSubmit={this.handleSubmit}>
    <Form.Label htmlFor="todo" className="form-label">
        Notes:
    </Form.Label>
    <div className="form-field">
        <div className="auto">
            <Form.Control
                type="text"
                id="notes"
                name="notes"
                className="input"
                value={this.state.value}
                onClick={() => { this.props.handleCardSave(this.props.id, this.state) }}>
            </Form.Control>
            <Button className="button" type="submit" >
                Save
        </Button>
        </div>
    </div>
</Form>
</div >
        )
    }
}