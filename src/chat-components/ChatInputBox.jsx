import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import Icon from '@material-ui/core/Icon'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice'
import SaveIcon from '@material-ui/icons/Save'

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
  },
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
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
      // <div className={classes.root}>
      <FormControl className={classes.margin}>
        <div className={classes.container}>
          <Grid container spacing={24}>
            <Grid item xs={10}>
              <TextField
                fullWidth
                className="ChatInputBox"
                onKeyPress={this.handleKeyPress}
                id="outlined-full-width"
                label="Texte"
                style={{ margin: 8, marginBottom: 5, height: '60%' }}
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
          </Grid>
        </div>
      </FormControl>
      // </div>
    )
  }
}
ChatInputBox.propTypes = {
  classes: PropTypes.object.isRequired
}
export default withStyles(styles)(ChatInputBox)
