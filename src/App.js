import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 11 },
      { id: 3, value: 111 },
      { id: 4, value: 1111 },
      { id: 5, value: 11111 }
    ]
  };

  handleIncrement = counter => {
    // console.log('Increment ', counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const updateCounter = { ...counters[index] };
    updateCounter.value += 1;
    counters[index] = updateCounter;
    // console.log('counters copy', counters);
    // console.log('state ', this.state.counters);
    this.setState({ counters });
  };
  handleDecrement = counter => {
    // console.log('Decrement ', counter);
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    const updateCounter = { ...counters[index] };
    updateCounter.value -= 1;
    counters[index] = updateCounter;
    // console.log('counters copy', counters);
    // console.log('state ', this.state.counters);
    this.setState({ counters });
  };

  handleDelete = counter => {
    console.log('Delete ', counter);
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  getCountersValue = () => {
    return this.state.counters.filter(c => c.value > 0).length;
  };

  render() {
    return (
      <React.Fragment>
        <nav className='navbar navbar-light bg-light'>
          <h1>
            NavBar{' '}
            <span className='badge badge-pill badge-secondary'>
              {this.getCountersValue()}
            </span>{' '}
          </h1>
        </nav>
        <main className='container'>
          <button className='btn btn-primary' onClick={this.handleReset}>
            Reset
          </button>
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
