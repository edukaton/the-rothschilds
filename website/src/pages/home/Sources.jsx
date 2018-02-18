import React from 'react'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

@withStyles((theme) => ({
  root: {
  },
  title: {
    marginTop: 50,
  },
  headline: {
    marginTop: 25,
  },
  subheadline: {
    marginTop: 10,
  },
}))
export default class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.headline} variant="headline" component="h1" >
          Bo właśnie o to chodzi, żeby buszować i weryfikować :)
        </Typography>
        <Typography className={classes.subheadline} variant="subheadline" component="h2" >
          put quote here
        </Typography>
        <div>
        </div>
      </div>
    );
  }
}
