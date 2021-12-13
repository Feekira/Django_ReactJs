import React from 'react';


export default class LoginComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password:''};
    
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
    
      handleSubmit(event) {
        alert('Login: ' + this.state.username + '   Password : '+ this.state.password);
        event.preventDefault();
      }
    
      render() {
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
    }
}