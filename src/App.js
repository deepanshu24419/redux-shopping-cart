import React, { Component } from 'react'
import './App.css';
import Product from './components/Product';
import data from './data.json'

class App extends Component {
  constructor(){
    super();
    this.state={
      products:data.products,
      size:'',
      sort:''
    }
  }
  render(){
  return (
    <div className="grid-container">
      <header>
        <a  href="/">
          React shopping cart in  redux
        </a>
      </header>
      <main>
        <div className="content">
          <div className="main">
<Product  products={this.state.products}  />
          </div>
          <div className="sidebar">
cart items
          </div>
        </div>
      </main>
      <footer>
        All right is reserved
      </footer>
    </div>
  );
  }
}

export default App;
