import React from "react";
import "./App.css";

import {Route} from 'react-router-dom';

//Components
import MoviesPage from './components/pages/MoviesPage';
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
          <Route path="/movies" component={MoviesPage}></Route>

        </Container>

        <Footer/>
        
      </div>
    );
  }
}

export default App;
