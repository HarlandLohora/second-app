import React, { Component } from 'react';
import './App.css';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
class App extends Component {
  getPassword = (e) =>{
    console.log("password"+this.refs.p.value);
    console.log("email"+this.mail.value);
  }

  manageChange = (e) =>{
    console.log(e.target.value)
  }
  render() {
    return (
      <div>
      <input ref={node=>this.mail = node} type="text" placeholder ="Tu email"/>
      <input ref="p" type="password" placeholder ="Tu password"/>
      <input onChange={this.manageChange} type="text" placeholder="recordatorio de password"/>
      <RaisedButton
        onClick={this.getPassword}
        label="Acceder"
        primary
      />
        
      </div>
      
    );
  }
}

export default App;
