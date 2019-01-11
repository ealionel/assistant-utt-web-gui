import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

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

class OutlinedTextFields extends React.Component {
  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR'
  }

  handleChange = name => event => {
    if (event.key === 'Enter' && event.target.value) {
      this.props.onMessageSent(event.target.value)
      event.target.value = ''
    }
  }

  render() {
    const { classes } = this.props

    return (
      <form className={classes.container}>
        <TextField
          id="outlined-bare"
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
        />
      </form>
    )
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(OutlinedTextFields)
