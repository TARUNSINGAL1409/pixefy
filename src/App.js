import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryList from './CategoryList' ; 
import {categories} from './categories' ; 

class App extends Component {
  render() {
      return (
        <div className="tc">
           <h1 className = 'f1' > PIXEFY  </h1>
            <div> 
                <CategoryList categories = {categories} /> 
            </div>     
        </div>
      );
  }
}

export default App;
