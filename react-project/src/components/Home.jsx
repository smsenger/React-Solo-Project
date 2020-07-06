import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import './Home.css'

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.jumbo = React.createRef();
    this.text = React.createRef();
    this.text2 = React.createRef();
    this.text3 = React.createRef();
    this.text4 = React.createRef();
    this.text5 = React.createRef();
    this.text6 = React.createRef();
    this.text7 = React.createRef();
    this.text8 = React.createRef();
    this.text9 = React.createRef();
  }

  colorChange = () => {
    var t = this.jumbo.current;
    var c = this.text.current;
    var x = this.text2.current;
    var y = this.text3.current;
    var z = this.text4.current;
    var a = this.text5.current;
    var b = this.text6.current;
    var f = this.text7.current;
    var g = this.text8.current;
    var h = this.text9.current;

    t.style.backgroundImage= '../../jumbobackground';
    a.style.color="#ed7c74";
    b.style.color="#ed7c74";
    c.style.color ="#ed7c74";
    x.style.color="#ed7c74";
    y.style.color="#ed7c74";
    z.style.color="#ed7c74";
    f.style.color="#ed7c74";
    g.style.color= "#ed7c74";
    h.style.color="#ed7c74"
  }
  

  render() {
    return (
      <div>
        <Jumbotron className="jumbo" ref={this.jumbo} value="clicca">
          <h1 className="app-title" ref={this.text} value="clicca"><i>One_Stop</i></h1>
          <p className="app-subtitle" ref={this.text2} value="clicca">
            News, todos, and notes, all in one stop!
          </p>
          <p>
            <Link className="app-link" to='/todoform' variant="primary" ref={this.text3} value="clicca">Todos</Link>
            <Link className="app-link" to="/searchrequest" variant="primary" ref={this.text4} value="clicca">News</Link>
            <Link className="app-link" to='/notes' variant="primary" ref={this.text5} value="clicca">Notes</Link>
            <Link className="app-link" to='/email' variant="primary" ref={this.text6} value="clicca">Email</Link>
            {/* <a type="button" className="app-link" style={{color: '#fcb045'}}onClick={this.colorChange} ref={this.text7} value="clicca">Change Design</a> */}
          </p>

          {/* <Form>
            <Form.Label htmlFor="todo" className="form-label" ref={this.text8} value="clicca">
              Sign In
          </Form.Label>
            <Form.Label htmlFor="todo" className="form-label">
              <Link to='/signup' style={{ color: '#fcb045', textDecoration: 'underline', marginLeft: '40px'}} ref={this.text9} value="clicca">Sign Up</Link>
            </Form.Label>
            <div className="form-field">
              <div className="auto">
                <Form.Control
                  type="text"
                  id="username"
                  name="username"
                  className="username"
                  placeholder="username"
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
                // value={this.state.value}
                // onChange={e => {
                //     this.updateState(e, 'value');
                // }}
                >
                </Form.Control>
                <Button className="button" type="submit" >
                  Login
              </Button>
              </div>
            </div>
          </Form> */}
        </Jumbotron>
      </div>
    )
  }
}
