import React, { Component } from 'react';
import './Task.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Task extends Component {

    constructor() {
        super()

        this.state = {
            notes: '',
            showMenu: false,

        }
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(e) {
        e.preventDefault();
        this.setState({
            showMenu: true,
        });
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        const { task, toggleCompleteStatus, deleteTask, addNotes } = this.props;
        return (
                <div className="Task" style={{ width: '355px' }}>
                    <div className={`Task__name ${task.complete ? 'is-complete' : ''}`}>
                        {task.name}
                    </div>
                    <button
                        onClick={toggleCompleteStatus}
                        className="Task__button Task__button--toggle"
                    >
                        {!task.complete ? (
                            <span role="img" aria-label="Complete">
                                ✔
                            </span>
                        ) : (
                                <span className="Undo__complete" style={{ marginBottom: '7px' }} role="img" aria-label="Incomplete">
                                    👈
                                </span>
                            )}
                    </button>
                    <button
                        onClick={deleteTask}
                        className="Task__button Task__button--delete"
                    >
                        <span role="img" aria-label="Delete">
                            ✖
                    </span>
                    </button>

                    <div>
                        <button className="Task__button Task__button3" onClick={this.showMenu}>📓</button>
                        {
                            this.state.showMenu
                                ? (
                                    <div className="menu">
                                        <textarea className="card-text" type="text" placeholder="Enter details here" id="notes" name="notes" onChange={this.handleChange} value={this.state.note}></textarea>
                                        <Button className="card-button" onClick={() => { addNotes(this.state.notes) }}>Save</Button>
                                        <Button className="card-button" onClick={() => { deleteNote(this.state.notes) }}>Delete</Button>
                                    </div>
                                )
                                : (
                                    null
                                )
                        }

                    </div>
                </div>
        );
    }
}