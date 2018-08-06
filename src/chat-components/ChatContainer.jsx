import React, { Component } from 'react';

export default class ChatContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ChatContainer">
        { this.props.children }
      </div>
    );
  }
}
