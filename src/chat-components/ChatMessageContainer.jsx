import React, { Component } from 'react';

export default class ChatMessageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
  }

  render() {
    return (
      <div className="ChatMessageContainer">
        { this.props.children }
      </div>
    );
  }
}
