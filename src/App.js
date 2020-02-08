import React, {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    names: [
      {
        name : "Adrian",
        age : 23
      },
      {
        name : "Mustafa",
        age : 24
      },
      {
        name : "Adeline",
        age : 24
      },
    ]
  }

  changeNameHandler = (event) => {
    this.setState({
      names: [
        {
          name : event.target.value,
          age : 23
        },
        {
          name : "Mustafa",
          age : 24
        },
        {
          name : "Adeline",
          age : 24
        },
      ]
    })
  }

  render() {
    return (
      <div>
        <UserInput changeName = {this.changeNameHandler} name = {this.state.names[0].name}/>
        <UserOutput name = {this.state.names[0].name}/>
        <UserOutput name = {this.state.names[1].name}/>
        <UserOutput name = {this.state.names[2].name}/>
      </div>  
    );
  }
  
}

export default App;
