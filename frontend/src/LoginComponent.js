import React from 'react';
import UserList from './UserList'


export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: 'admin', password:'vndtm4152', token:null };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({username: event.target.value});
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }

      logout(event){
        localStorage.removeItem('token');
        this.setState({token:null});
      }
    
      handleSubmit(event) {
        var url = 'http://127.0.0.1:8000/api-token-auth/';
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username:this.state.username, password:this.state.password})
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            // .then(data => console.log(data));
            .then(data => {
                localStorage.setItem('token',data.token)
                this.setState({token:data.token})
            });
        // alert('Login: ' + this.state.username + '   Password : '+ this.state.password);
        event.preventDefault();
      }
    
      render() {
        const token = localStorage.getItem('token')
        if(!token)
            return (
            <form onSubmit={this.handleSubmit}>
                <label>
                Login:
                <input type="text" value={this.state.username} onChange={this.handleChange} />
                <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
                </label>
                <input type="submit" value="Enviar" />
            </form>
            );
        else
            return (
                <div>
                    <UserList/>
                    <button onClick={() => this.logout()}>Logout</button>
                </div>
            )
    }
}