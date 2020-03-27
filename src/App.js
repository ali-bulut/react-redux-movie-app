import React from "react";
import "./App.css";

import {Route} from 'react-router-dom';

//Components
import MoviesPage from './components/pages/MoviesPage';
import NewMoviePage from './components/pages/NewMoviePage';
import Footer from './components/Footer';
import Header from './components/Header';

//Semantic UI
import 'semantic-ui-css/semantic.min.css';
import {Container} from 'semantic-ui-react';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        
        <Header/>

        <Container text>

          {/* /movies path'ine gittiğinde MoviesPage componentinin gözükmesi için bu şekilde yazdık. */}
          <Route path="/movies" exact component={MoviesPage}></Route>
          <Route path="/movie/new" exact component={NewMoviePage}></Route>
          <Route path="/movies/:id" exact component={NewMoviePage}></Route>

        </Container>

        <Footer/>
        
      </div>
    );
  }
}

export default App;
