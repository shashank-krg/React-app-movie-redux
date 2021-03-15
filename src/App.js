import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Movies from './components/Movies'
import MovieInfo from './components/MovieInfo'
import {Provider} from 'react-redux'
import store from './store/store'



class App extends Component {

 
  render() {
    return (
      <Provider store={store}>
      <div className="App">
      <Route exact path="/" render={() => (
        <Movies/>
    )} />
    <Route path="/movie-info/" render={() => (
        <MovieInfo/>
         )}/> 
        
      
      </div>
      
      </Provider>
    );
  }
}

export default App;
