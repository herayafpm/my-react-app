import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List.js';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      items : []
    }
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({items:data}))
  }

  render(){
    const {items,error} = this.state
    return (
      <div className="App">
        <header className="App-header">
          <ul>
            {items.map((item,index)=><li key={index}>{item.name}</li>)}
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
