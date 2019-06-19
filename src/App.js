import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';
import User from './components/User';


class App extends Component {

  state = {
    username: 'Basia',
    users: [
      {
        id: 1,
        name: 'Basia',
        showInput: false
      },
      {
        id: 2,
        name: 'Tusio',
        showInput: false
      },
      {
        id: 3,
        name: 'Onni',
        showInput: false
      },
      {
        id: 4,
        name: 'Basia',
        showInput: false
      },
      {
        id: 5,
        name: 'Tusio',
        showInput: false
      },
      {
        id: 6,
        name: 'Onni',
        showInput: false
      }
    ]
  };

  updateUsername = (event, id) => {
    const userIndex = this.state.users.findIndex(user => {
      return user.id === id;
    });

    const user = { ...this.state.users[userIndex] }
    user.name = event.target.value;

    const users = [...this.state.users];
    users[userIndex] = user;

    this.setState({ users: users });
  }

  toggleInput = (userIndex) => {
    const users = [...this.state.users];
    users[userIndex].showInput = !users[userIndex].showInput;
    this.setState({users: users});
  }

  removeUser = (userIndex) => {
    const users = [...this.state.users];
    users.splice(userIndex, 1);
    this.setState({users: users});
  }

  render() {

    return (
      <div className="App">
        <UserOutput username={this.state.username} /> 
        Available users:
        <ul>
          {this.state.users.map((user, index) => {
            return <User
              click={() => this.removeUser(index)}
              change={(event) => this.updateUsername(event, user.id)}
              toggle={() => this.toggleInput(index)}
              showInput={user.showInput}
              name={user.name}
              key={user.id}
              />
          })}
        </ul>
      </div>
    );
  }
}

export default App;
