import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron';
import './Email.css';
import { Link } from 'react-router-dom';

import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Email extends Component {
    constructor(props) {
        super(props);

        this.state = {
            from_name: '',
            email: '',
            title: '',
            note: '',
        }
    }


    sendMessage(e) {
        e.preventDefault();
        // this.props.submitInfo();
        const template_params = {
            "email": this.state.email,
            "title": this.state.title,
            "from_name": this.state.from_name,
            "note": this.state.note
        }
        const user_id = 'user_0PcCX5oRy463TxqMRswTE';
        const service_id = "gmail";
        const template_id = "react_project";
        emailjs.send(service_id, template_id, template_params, user_id)
            .then(response => {
                toast.success("Your message has been successfully sent!", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                console.log("SUCCESS!", response.status, response.text);
                alert("Email sent successfully")
            },
            );
        this.setState({
            from_name: '',
            email: "",
            title: '',
            note: ''
        });
    }
    handleChange = (e) => {
        e.preventDefault();
        const { name, value, target } = e.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <Jumbotron className="jumbo-background">
                    <h1 className="app-title"><i>One_Stop</i> Email</h1>
                    <p className="app-subtitle">Send emails easily with EmailJS!</p>
                    <p>
                        <Link className="app-link" to="/" variant="primary">Home</Link>
                        <Link className="app-link" to="/searchrequest" variant="primary">News</Link>
                        <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
                        <Link className="app-link" to='/notes' variant="primary">Notes</Link>
                        <br />
                        <Button className="app-link" onClick={this.createCard}>Create card</Button>
                    </p>

                    <form
                        className="ui-form"
                        id={this.props.id}
                        name={this.props.name}
                        method={this.props.method}
                        action={this.props.action}
                    >
                        <textarea
                            id="from_name"
                            name="from_name"
                            className="name-form"
                            onChange={this.handleChange}
                            placeholder="Your name"
                            required
                            value={this.state.name}
                        />
                        <textarea
                            id="email"
                            name="email"
                            className="email-form"
                            onChange={this.handleChange}
                            placeholder="to: email address"
                            required
                            value={this.state.email}
                            rows={1}
                        />
                        <div key="b" className="title-container"><input className="card-title" placeholder="Enter title here" required id="title" name="title" onChange={this.handleChange} value={this.state.title} style={{ borderRadius: '5px' }}></input></div>
                        <Card.Text className="text-container">
                            <textarea className="card-text" type="text" placeholder="Enter text here" required id="note" name="note" onChange={this.handleChange} ref={this.textInput} value={this.state.note}></textarea>
                        </Card.Text>
                        <div className="button-div">
                            <Button className="card-button3" value="Send" onClick={this.sendMessage.bind(this)}>Email</Button>
                        </div>
                    </form>
                </Jumbotron>
            </div>
        )
    }
}


