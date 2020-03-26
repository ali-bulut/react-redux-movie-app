import React from "react";
import logo from "./logo.svg";
import "./App.css";

import MoviesPage from './components/pages/MoviesPage';

import {Link, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Link to="/movies">Movies</Link>
          
          {/* /movies path'ine gittiğinde MoviesPage componentinin gözükmesi için bu şekilde yazdık. */}
          <Route path="/movies" component={MoviesPage}></Route>
        </header>
      </div>
    );
  }
}

export default App;
