import React, { Component } from 'react';

class ErrorMsg extends Component {
  render() {
    return(
      <div className="error">{this.props.msg}</div>
    )
  }
}

export default ErrorMsg;
