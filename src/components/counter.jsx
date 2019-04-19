import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0
  };
  render() {
    // let classes = this.getBadgeColor();
    return (
      <div className='container'>
        <span className={this.getBadgeColor()}>{this.formatCounter()}</span>
        <button className='btn btn-secodary m-2'>Increament</button>
      </div>
    );
  }
  getBadgeColor() {
    let classes = 'badge m-2 ';
    classes += this.state.count === 0 ? 'badge-warning' : 'badge-primary';
    return classes;
  }

  formatCounter() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;
