import React, { Component } from 'react'

export default class User extends Component {
    state = {
        fullname: '',
        email: '',
        password: ''
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        if (fullname && email && password) {
          db.collection('users').add(this.state);
          this.setState({
            fullname: '',
            email: '',
            password: ''
          })
        }
      }
    
      handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [fullname]: value,
          [email]: value,
          [password]: value
        })
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label htmlFor="fullname">Full  Name</label>
                    <input id="fullname" name="fullname" onChange={this.handleChange} value={this.state.fullname}></input>
                    </div>

                    <div>
                    <label htmlFor="email"></label>
                    <input id="email" name="email" onChange={this.handleChange} value={this.state.email}></input>
                    </div>

                    <div>
                    <label htmlFor="password"></label>
                    <input id="password" name="password" onChange={this.handleChange} value={this.state.password}></input>
                    </div>

                    <button type="submit">Add User</button>
                </form>

                <form onSubmit={this.handleLogin}>
                    <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" onChange={this.handleInfo} value={this.state.email}></input>
                    </div>

                    <div>
                    <label htmlFor="password">Password</label>
                    <input id="password" name="password" onChange={this.handleInfo} value={this.state.email}></input>
                    </div>
                    
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}
