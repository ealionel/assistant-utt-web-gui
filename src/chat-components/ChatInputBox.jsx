import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
})

class ChatInputBox extends Component {
  constructor(props) {
    super(props)
  }

  handleKeyPress = event => {
    if (event.key === 'Enter' && event.target.value) {
      this.props.onMessageSent(event.target.value)
      event.target.value = ''
    }
  }

  render() {
    const { classes } = this.props

    return (
      <FormControl className={classes.margin}>
        <div className={classes.container}>
          <TextField
            // fullWidth
            className="ChatInputBox"
            onKeyPress={this.handleKeyPress}
            id="outlined-full-width"
            label="Texte"
            style={{ margin: 8 }}
            margin="normal"
            variant="outlined"
            InputLabelProps={{
              shrink: true
            }}
          />
          <Button variant="contained" color="primary">
            Envoyer
          </Button>
        </div>
      </FormControl>
    )
  }
}
ChatInputBox.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(ChatInputBox)
