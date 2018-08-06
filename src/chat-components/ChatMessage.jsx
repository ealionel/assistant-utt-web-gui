import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Message from '../classes/Message.js'

export default class ChatMessage extends Component {

  static defaultProps = {
    message: new Message({}),
  }

  static propTypes = {
    message: PropTypes.instanceOf(Message),
  }

  constructor(props) {
    super(props);
    this.state = { message: this.props.message };
  }

  render() {

    // Adapte la classe du bloc en fonction de la provenance
    const classes = `ChatMessage ${ this.props.message.isFromSender ? 'ChatMessage--FromSender' : 'ChatMessage--FromOther' }`

    return (
      <div className={classes}>
        { this.state.message.text }
      </div>
    );
  }
}
