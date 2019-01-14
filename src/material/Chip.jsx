import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  chip: {
    margin: theme.spacing.unit
  }
})

class OutlinedChips extends Component {
  constructor(props) {
    super(props)
  }

  createChips = () => {
    const chip = []
    Object.entries(this.props.data.chip).forEach(([key, val]) => {
      console.log('key', key, 'val', val)
      chip.push(
        <Chip
          label={val.label}
          onClick={val.onClick}
          className={this.props.classes.chip}
          color="primary"
          variant="outlined"
        />
      )
    })
    console.log('allchip', chip)
    return chip
  }
  render() {
    const { classes } = this.props
    return <div className={classes.root}>{this.createChips()}</div>
  }
}
OutlinedChips.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(OutlinedChips)
