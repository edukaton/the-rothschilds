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
  buttonsContainer: {
    margin: 50,
  },
  button: {
    margin: 20,
    padding: 20,
  },
}))
export default class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.title} variant="title" component="h1" >Wiesz wszystko o manipulacji?</Typography>
        <Typography className={classes.headline} variant="headline" component="h1" >
          Ukończ nasze wyzwanie, a za wysoki wynik czeka Cię nie byle prezent
        </Typography>
        <Typography className={classes.subheadline} variant="subheadline" component="h2" >
          Jeśli rzeczywiście znasz się na rzeczy, to powinna być tylko formalność...
        </Typography>
        <div>
        </div>
      </div>
    );
  }
}
