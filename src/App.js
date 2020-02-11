import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    
    this.state = {

      monsters: [
        {
          name: 'Frankenstine',
          id: 'ac01'
        },
        {
          name: 'Dracula',
          id: 'ac02'
        },
        {
          name: 'Zombie',
          id: 'ac03'
        },
        {
          name: 'Fray',
          id: 'ac04'
        }
      ]};
  }

  render() {
    return (
    
      <div className="App">
        {
          this.state.monsters.map ( monsters => <h2 key = {monsters.id}>  {monsters.name} </h2> )
        }
      </div>
    );
  }
}

export default App;
