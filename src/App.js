import React , {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CategoryList from './Component/CategoryList/CategoryList' ; 
import {categories} from './Component/categories/categories' ;
import Navigation from './Component/Navigation/Navigation';
import Register from './Component/Register/Register';
import Signin from './Component/Signin/Signin';

class App extends Component {
  render() {
      return (
        <div className="tc">
           <h1 className = 'f1'> PIXEFY  </h1>
            <div>
                {/*<Navigation />
                <Signin />
                <Register />*/}
                <CategoryList categories = {categories} /> 
            </div>     
        </div>
      );
  }
}

export default App;
