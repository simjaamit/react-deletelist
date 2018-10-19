import React, { Component } from 'react';
import User from './components/user';
import './App.css';

class App extends Component {

  state = {
    users : [
      {name:"Simja",age:"24"},
      {name:"Amit",age:"24"},
      {name:"Ananya",age:"2"}
    ]
  };

  deleteHandler = (index, e) =>
  {
    const users = Object.assign([], this.state.users);
    users.splice(index , 1);
    this.setState({
      users : users
    });
  }

  render() {
    return (
      <div className="App">
        <ul>
          {
            this.state.users.map((user, index) => 
            {
              return(<User  age = {user.age} delEvent={this.deleteHandler.bind(this, index)} >{user.name}</User>)
            })
          }
        </ul>
      </div>
    );
  }
}

export default App;
