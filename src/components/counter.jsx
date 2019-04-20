// import React, { Component } from 'react';

// class Counter extends Component {
//   getBadgeClass = () => {
//     let bgClass = 'badge badge-pill badge-';
//     bgClass += this.props.counter.value <= 0 ? 'warning' : 'primary';
//     console.log('bgClass: ', bgClass);
//     return bgClass;
//   };
//   render() {
//     let { counter } = this.props;

//     return (
//       <div className='row'>
//         <div className='col-md-2'>
//           <span className={this.getBadgeClass()}>
//             {' '}
//             {counter.value > 0 ? counter.value : 'Zero'}
//           </span>
//         </div>
//         <div className='col-md-4'>
//           <button
//             className='btn btn-primary m-2'
//             onClick={() => this.props.onIncrement(counter)}
//           >
//             +
//           </button>
//           <button
//             className='btn btn-secondary m-2'
//             onClick={() => this.props.onDecrement(counter)}
//             disabled={counter.value <= 0}
//           >
//             -
//           </button>
//           <button
//             className='btn btn-danger m-2'
//             onClick={() => this.props.onDelete(counter)}
//           >
//             X
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;

import React from 'react';

const Counter = props => {
  const getBadgeClass = () => {
    let bgClass = 'badge badge-pill badge-';
    bgClass += props.counter.value <= 0 ? 'warning' : 'primary';
    console.log('bgClass: ', bgClass);
    return bgClass;
  };
  //   render() {
  let { counter } = props;

  return (
    <div className='row'>
      <div className='col-md-2'>
        <span className={getBadgeClass()}>
          {' '}
          {counter.value > 0 ? counter.value : 'Zero'}
        </span>
      </div>
      <div className='col-md-4'>
        <button
          className='btn btn-primary m-2'
          onClick={() => props.onIncrement(counter)}
        >
          +
        </button>
        <button
          className='btn btn-secondary m-2'
          onClick={() => props.onDecrement(counter)}
          disabled={counter.value <= 0}
        >
          -
        </button>
        <button
          className='btn btn-danger m-2'
          onClick={() => props.onDelete(counter)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Counter;
