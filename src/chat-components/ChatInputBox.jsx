import React, { Component } from 'react';

export default class ChatInputBox extends Component {
  constructor(props) {
    super(props);
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter' && event.target.value) {
      this.props.onMessageSent(event.target.value);
      event.target.value = '';
    }
  }

  render() {
    return (
        <input type="text" className="ChatInputBox" onKeyPress={ this.handleKeyPress } />
    );
  }
}
