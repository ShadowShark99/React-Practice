/* eslint-disable react/destructuring-assignment */
import { Component } from 'react';

class Count extends Component {
  constructor(props) {
    super(props);

  }



  render() {
    return (
      <div>Count: {this.props.children}</div>
    );
  }
}

export default Count;
