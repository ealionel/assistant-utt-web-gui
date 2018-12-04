import React, { Component } from 'react'

import ChatInputBox from './ChatInputBox.jsx'
import ChatContainer from './ChatContainer.jsx'
import ChatMessageContainer from './ChatMessageContainer.jsx'
import ChatMessage from './ChatMessage.jsx'

import Message from '../classes/Message.js'

export default class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      messagesNumber: 0
    }
  }

  // Fonction appelée lorsque un message est envoyé par l'utilisateur
  onMessageSent = textMessage => {
    const message = new Message({
      text: textMessage,
      isFromSender: true
    })

    console.log(
      `[${message.date.toLocaleTimeString()}] Message sent : ${textMessage}`
    )
    this.addMessage(message)

    this.sendQueryToChatbot(message.text)
      .then(response => {
        console.log(`Chatbot replied : ${response.queryResult.fulfillmentText}`)

        this.addMessage(
          new Message({
            text: response.queryResult.fulfillmentText,
            isFromSender: false
          })
        )
      })
      .catch(error => console.log(error))
  }

  // Ajoute un message au state et rerender le chat
  // L'argument doit être un objet de type Message
  addMessage = newMessage => {
    this.setState(prevState => ({
      messages: [...prevState.messages, newMessage],
      messagesNumber: prevState.messagesNumber + 1
    }))
  }

  // Envoie une requête HTTP à l'API de Dialogflow pour récupérer la réponse
<<<<<<< HEAD
  sendQueryToChatbot = async (queryText) => {
    // const httpParameters = {
    //   method: 'POST',
    //   headers: {
    //      'Content-Type': 'application/json',
    //      'Accept': 'application/json',
    //   },
    //   body: {
    //     text: queryText,
    //   },
    // };
=======
  sendQueryToChatbot = async queryText => {
    const httpParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: {
        text: queryText
      }
    }
>>>>>>> 9a4f53a35a4b1ef604e5f3b483f8fd2ad5042102

    try {
      const response = await fetch(
        `http://assistantutt.ga:8080/api/dialogflow/detectIntent?textRequest=${queryText}`,
        { mode: 'no-cors' }
      ).then(response => response.json())
      console.log(response)
      return response
    } catch (error) {
      return new Error('Could not fetch response.')
    }
  }

  render() {
    return (
      <ChatContainer>
        <ChatMessageContainer
          ref={element => {
            this.messageContainerRef = element
          }}
        >
          {this.state.messages.map(msg => (
            <ChatMessage message={msg} key={msg.id} />
          ))}
        </ChatMessageContainer>

        <ChatInputBox onMessageSent={this.onMessageSent} />
      </ChatContainer>
    )
  }
}
