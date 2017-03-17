import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [
        { id:1, name: 'Mere', isSelected: true },
        { id:2, name: 'Pere', isSelected: false },
        { id:3, name: 'Caramele', isSelected: false }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Listia: Smart shopping</h2>
        </div>
        <div className="Listia-App">
          <form>
            <input type="text" />
          </form>
          <div className="Shop-List">
            <ul>
            {this.state.items.map(
              item => 
                <li key={item.id}>
                  <input type="checkbox" defaultChecked={item.isSelected}/>{item.name}</li>
            )}
            </ul>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
