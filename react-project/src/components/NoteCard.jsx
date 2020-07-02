import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import './Notes.css'
import emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class NoteCard extends Component {
    constructor(props) {
        super(props);
        //ref to store the textInput DOM element
        this.textInput = React.createRef();

        this.state = {
            title: '',
            note: '',
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value, target } = e.target;
        this.setState({
            [name]: value
        })
    }

    sendMessage(e) {
        e.preventDefault();
        // if (!this.validateMail()) {
        //     return;
        // }
        const template_params = {
            "reply_to": "reply_to_value",
            "from_name": "from_name_value",
            "to_name": "to_name_value",
            "message_html": "message_html_value"
        }

        const user_id = "Saesha Senger"
        const service_id = "default_service";
        const template_id = "template_PEnOB1lM";
        emailjs.send(service_id, template_id, template_params, user_id);
        emailjs
            .send("gmail", "contact", template_id, {})
            .then(response => {
                toast.success("Your message has successfully sent!", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                console.log("SUCCESS!", response.status, response.text);
            },
            );
        this.setState({
            name: "",
            email: "",
        });
    }

    render() {
        const downloadData = 'data:application/txt;charset=utf-8,' + encodeURIComponent(this.state.title + '\n' + this.state.note);
        return (
            <div>
                <form
                    className="ui-form"
                    id={this.props.id}
                    name={this.props.name}
                    method={this.props.method}
                    action={this.props.action}
                >
                    <textarea
                        id="name"
                        name="name"
                        className="name-form"
                        onChange={this.handleChange.bind(this)}
                        placeholder="Your name (emails only)"
                        required
                        value={this.state.name}
                    />
                    <div key="b" className="title-container"><input className="card-title" placeholder="Enter title here" required id="title" name="title" onChange={this.handleChange} value={this.state.title} style={{ borderRadius: '5px' }}></input></div>
                    <Card.Text className="text-container">
                        <textarea className="card-text" type="text" placeholder="Enter text here" required id="note" name="note" onChange={this.handleChange} ref={this.textInput} value={this.state.note}></textarea>
                    </Card.Text>
                    <div className="button-div">
                        <Button className="card-button1" onClick={() => { this.props.handleCardSave(this.props.id, this.state) }}>Save</Button>
                        <Button href={downloadData} target="_blank" download="data.txt" className='card-button2' onClick={this.textToFile}>Export</Button>
                        <Button className="card-button3" value="Send" onClick={this.sendMessage.bind(this)}>Email</Button>
                    </div>
                    {/* <Card.Link href="#">Email notes</Card.Link> */}
                </form>
            </div >

        )
    }
}
