import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

@withStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}))
export default class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div />
    );
  }
}
