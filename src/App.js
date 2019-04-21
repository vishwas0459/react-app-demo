import React, { Component } from 'react';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customer from './components/customer';
import Rentals from './components/rentals';

import { Redirect, Switch, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/notFound';
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className='container'>
          <Switch>
            <Route path='/customer' component={Customer} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/movie/:id' component={MovieForm} />
            <Route path='/movies' exact component={Movies} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
