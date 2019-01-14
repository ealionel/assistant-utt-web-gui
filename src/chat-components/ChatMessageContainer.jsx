import React, { Component } from 'react'

export default class ChatMessageContainer extends Component {
  constructor(props) {
    super(props)
  }

  scrollToBottom() {
    this.divRef.scrollTop = this.divRef.scrollHeight
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  render() {
    return (
      <div
        style={{ position: 'relative' }}
        ref={element => {
          this.divRef = element
        }}
        className="ChatMessageContainer"
      >
        {this.props.message}
        <div
          style={{
            position: 'sticky',
            top: '95%'
          }}
        >
          {this.props.chip}
        </div>
      </div>
    )
  }
}
