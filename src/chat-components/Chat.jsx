import React, { Component } from 'react'

import ChatInputBox from './ChatInputBox.jsx'
import ChatContainer from './ChatContainer.jsx'
import ChatMessageContainer from './ChatMessageContainer.jsx'
import ChatMessage from './ChatMessage.jsx'
import AppBar from '../material/AppBar.jsx'
import Chip from '../material/Chip.jsx'
import FaceIcon from '@material-ui/icons/Face'
import DoneIcon from '@material-ui/icons/Done'

import Message from '../classes/Message.js'
import Divider from '@material-ui/core/Divider'
import 'simplebar'
import 'simplebar/dist/simplebar.css'

export default class Chat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      messages: [],
      messagesNumber: 0,
      chip: {}
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

    try {
      const response = await fetch(
        `http://assistantutt.ga:8080/api/dialogflow/detectIntent?textRequest=${queryText}`
      ).then(response => response.json())
      console.log(response)
      return response
    } catch (error) {
      return new Error('Could not fetch response.')
    }
  }

  onClick = () => {
    alert('oui')
  }
  render() {
    const data = {
      chip: {
        chip1: {
          label: 'test1',
          onClick: this.onClick
        },
        chip2: {
          label: 'test2',
          onClick: this.onClick
        },
        chip3: {
          label: 'test3',
          onClick: this.onClick
        }
      }
    }

    return (
      <ChatContainer>
        <AppBar />
        <ChatMessageContainer
          message={this.state.messages.map(msg => (
            <ChatMessage message={msg} key={msg.id} />
          ))}
          chip={<Chip data={data} />}
        />
        <Divider variant="middle" />

        <ChatInputBox onMessageSent={this.onMessageSent} />
      </ChatContainer>
    )
  }
}
