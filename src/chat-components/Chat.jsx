import React, { Component } from 'react';

import ChatInputBox from './ChatInputBox.jsx';
import ChatContainer from './ChatContainer.jsx';
import ChatMessageContainer from './ChatMessageContainer.jsx';
import ChatMessage from './ChatMessage.jsx';

import Message from '../classes/Message.js';

export default class Chat extends Component {
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      messagesNumber: 0,
    };

  }

  // Fonction appelée lorsque un message est envoyé par l'utilisateur
  onMessageSent = (textMessage) => {

    const message = new Message({
      text: textMessage,
      isFromSender: true,
    });

    console.log(`[${message.date.toLocaleTimeString()}] Message sent : ${ textMessage }`);
    this.addMessage(message);
  }

  addMessage = (newMessage) => {
    this.setState((prevState) => (
      {
        messages: [...prevState.messages, newMessage],
        messagesNumber: prevState.messagesNumber + 1,
      }
    ));
  }

  render() {
    return (
      <ChatContainer>

        <ChatMessageContainer>
          { this.state.messages.map(msg => <ChatMessage message={ msg } key={ msg.id }/> ) }
        </ChatMessageContainer>

        <ChatInputBox onMessageSent={ this.onMessageSent } />

      </ChatContainer>
    );
  }
}
