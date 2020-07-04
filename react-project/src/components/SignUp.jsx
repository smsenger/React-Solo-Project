import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="jumbo-background">
        <h1 className="app-title"><i>One_Stop</i></h1>
        <p className="app-subtitle">
          News, todos, and notes, all in one stop!
  </p>
        <p>
          <Link className="app-link" to="/" varient="primary">Home</Link>
          <Link className="app-link" to='/todoform' variant="primary">Todos</Link>
          <Link className="app-link" to="/searchrequest" variant="primary">News</Link>
          <Link className="app-link" to='/notes' variant="primary">Notes</Link>
          <Link className="app-link" to='/email' variant="primary">Email</Link>
        </p>
                <div>
                    <p>Sign up with EmailJS to write emails from <i>One_Stop </i>!</p>
                    <p>To find your user ID, select "Account" on the left side of any
                    page after sign-in. Select "API keys," then copy the user ID and
                    place it in the appropriate field in this form. <i>One_Stop </i>
                    will securely store this information so you can send emails with ease!</p>
                </div>
                <Form>
                    <Form.Label htmlFor="todo" className="form-label">
                        Sign Up
                    </Form.Label>
                    <div className="form-field">
                        <div className="auto">
                            <Form.Control
                                type="text"
                                id="username"
                                name="username"
                                className="username"
                                placeholder="username"
                                required
                            // value={this.state.value}
                            // onChange={e => {
                            //     this.updateState(e, 'value');
                            // }}
                            >
                            </Form.Control>
                            <Form.Control
                                type="text"
                                id="password"
                                name="password"
                                className="password"
                                placeholder="password"
                                required
                            // value={this.state.value}
                            // onChange={e => {
                            //     this.updateState(e, 'value');
                            // }}
                            >
                            </Form.Control>
                            <Form.Control
                                type="text"
                                id="emailuserid"
                                name="emailuserid"
                                className="emailuserid"
                                placeholder="EmailJS user ID"
                            // value={this.state.value}
                            // onChange={e => {
                            //     this.updateState(e, 'value');
                            // }}
                            >
                            </Form.Control>
                            <Button className="button" type="submit" >
                                Sign Up
                            </Button>
                        </div>
                    </div>
                </Form>
                </Jumbotron>
            </div>
        )
    }
}
