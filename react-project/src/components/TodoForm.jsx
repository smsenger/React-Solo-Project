import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/todoactions';
import TaskList from './TaskList'
import { Link } from 'react-router-dom';
import './TodoForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            value: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateState(event, key) {
        this.setState({
            [key]: event.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onNewTask(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div>
                <Jumbotron className="jumbo-background">
                    <h1 className="app-title">One Stop Todos</h1>
                    <p>
                        <Link className="app-link" to='/' variant="primary">Home</Link>
                        <Link className="app-link" to="/searchrequest" variant="primary">News</Link>
                        <Link className="app-link" to='/notes' variant="primary">Notes</Link>
                    </p>
                <Form onSubmit={this.handleSubmit}>
                        <Form.Label htmlFor="todo" className="form-label">
                            Enter A Task
          </Form.Label>
                    <div className="form-field">
                        <Form.Control
                            type="text"
                            id="todo"
                            name="todo"
                            className="input"
                            value={this.state.value}
                            onChange={e => {
                                this.updateState(e, 'value');
                            }}></Form.Control>

                        <Button className="button" type="submit" >
                            Add Task
          </Button>
                    </div>
                </Form>
                <TaskList />
                </Jumbotron>
            </div>
        );
    }
}

const mapDispatchToProps = {
    onNewTask: addTodo
}

export default connect(
    null,
    mapDispatchToProps,
)(TodoForm)