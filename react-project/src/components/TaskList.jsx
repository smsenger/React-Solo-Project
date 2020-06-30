import React, { Component } from 'react';
import Task from './Task';
import './TaskList.css';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions/todoactions';
import { setVisibility } from '../redux/actions/visibilityActions';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'


class TaskList extends Component {
    render() {
        return (
            <div className="task-display">
                {/* <Button onClick={() => { this.props.setVisibility('incomplete') }}>Incomplete</Button>
                <Button onClick={() => { this.props.setVisibility('complete') }}>Complete</Button> */}
                <div>
                    {/* {this.props.visibility === 'incomplete' && ( */}
                        <>

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
                                        />
                                    );
                                }
                                return '';
                            })}
                        </>
                    {/* )} */}
                </div>
                <div>
                    {/* {this.props.visibility === 'complete' && ( */}
                        <>
                            <h2 className="TaskList__title">Completed Tasks</h2>
                            {this.props.tasks.map((task, i) => {
                                if (task.complete) {
                                    return (
                                        <Task task={task} key={i}
                                            toggleCompleteStatus={() => { this.props.toggleCompleteStatus(i); }}
                                            deleteTask={() => { this.props.deleteTask(i); }}
                                        />
                                    );
                                }
                                return '';
                            })}
                        </>
                    {/* // )} */}
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
    setVisibility: setVisibility
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList)