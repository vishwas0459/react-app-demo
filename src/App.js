import React, { Component } from 'react';
import Movies from './components/movies';
import MovieForm from './components/movieForm';
import Customer from './components/customer';
import Rentals from './components/rentals';
import { ToastContainer } from 'react-toastify';
import { Redirect, Switch, Route } from 'react-router-dom';
import NotFound from './components/notFound';
import NavBar from './components/navbar';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <main className='container'>
          <Switch>
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/customers' component={Customer} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/movie/new' component={MovieForm} />
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
