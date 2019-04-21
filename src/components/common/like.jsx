import React, { Component } from 'react';
class Like extends Component {
  state = {
    heartClass: 'fa fa-heart',
    flag: true
  };
  changeHeart = () => {
    let heartClass;
    if (this.state.flag) {
      heartClass = 'fa fa-heart-broken';
      this.setState({ heartClass, flag: !this.state.flag });
    } else {
      heartClass = 'fa fa-heart';
      this.setState({ heartClass, flag: !this.state.flag });
    }
  };
  render() {
    return (
      <i
        className={this.state.heartClass}
        onClick={this.changeHeart}
        style={{ cursor: 'pointer' }}
      />
    );
  }
}

export default Like;
