import React, { Component } from 'react';

export default class ChatMessageContainer extends Component {
  constructor(props) {
    super(props);

  }

  scrollToBottom() {
    this.refTest.scrollTop = this.refTest.scrollHeight;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div ref={element => { this.refTest = element }} className="ChatMessageContainer">
        { this.props.children }
      </div>
    );
  }
}
