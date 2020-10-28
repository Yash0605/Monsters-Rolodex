import "./App.css";
import React, { Component } from "react";
import {CardList} from "./components/card-list/card-list.component"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: []
    };
  }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(users => this.setState({monsters : users}));
  // }
  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.setState({monsters: users});
  }

  render() {
    return (
      <div className="App">
        <CardList name="Bill" />
        {this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
