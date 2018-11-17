import React, { Component } from 'react';
import './styles.css';

class Counter extends Component {

  state = { count: this.props.initialCount || 0 }

  updateCount = val => () => {
    const { onCountUpdate } = this.props;
    this.setState(state => {
      const nextCount = state.count + val;
      return { count: nextCount }
    },
      () => onCountUpdate(this.state.count)
    );
  }

  render() {
    const { count } = this.state;
    const { title } = this.props;
    return (
      <div className="counter">
        <h3 className="title">{title}</h3>
        <div className="buttons">
          <button onClick={this.updateCount(1)}>+</button>
          <span className="count"> {count} </span>
          <button onClick={this.updateCount(-1)}>-</button>
        </div>
      </div>
    );
  }
}

Counter.defaultProps = {
  title: "My Counter",
  onCountUpdate: () => { }
};

export default Counter;
