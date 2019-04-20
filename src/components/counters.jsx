import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  render() {
    const { counters } = this.props;
    // console.log(this.props);
    return (
      <div>
        {counters.map(c => (
          <Counter {...this.props} counter={c} key={c.id} />
        ))}
      </div>
    );
  }
}

export default Counters;
