import React, { Component } from 'react';
import Task from './Task';
import './TaskList.css';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, addNotes } from '../redux/actions/todoactions';
import { setVisibility } from '../redux/actions/visibilityActions';


class TaskList extends Component {
    render() {
        return (
            <div className="task-display">
                <div className="incomplete">
                    <h2 className="TaskList__title">Task List</h2>
                    {this.props.tasks.map((task, i) => {
                        if (!task.complete) {
                            return (
                                <Task
                                    task={task}
                                    key={i}
                                    toggleCompleteStatus={() => {
                                        this.props.toggleCompleteStatus(i);
                                    }}
                                    deleteTask={() => {
                                        this.props.deleteTask(i);
                                    }}
                                    addNotes={(notes) => {
                                        this.props.addNotes(i, notes);
                                    }}
                    
                                />
                            );
                        }
                        return '';
                    })}
                </div>
                <div className="complete">
                    <h2 className="TaskList__title">Completed Tasks</h2>
                    {this.props.tasks.map((task, i) => {
                        if (task.complete) {
                            return (
                                <Task task={task} key={i}
                                    toggleCompleteStatus={() => { this.props.toggleCompleteStatus(i); }}
                                    deleteTask={() => { this.props.deleteTask(i); }}
                                    addNotes={(notes) => { this.props.addNotes(i, notes); }}
                                />
                            );
                        }
                        return '';
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.todoState.tasks,
        visibility: state.visibility
    }
}

const mapDispatchToProps = {
    toggleCompleteStatus: toggleTodo,
    deleteTask: deleteTodo,
    setVisibility: setVisibility,
    addNotes: addNotes,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)