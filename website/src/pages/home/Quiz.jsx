import React from 'react'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
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
@withRouter
export default class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.title} variant="title" component="h1" >Czytaj między wierszami!</Typography>
        <Typography className={classes.headline} variant="headline" component="h1" >
          Przejdź nasz quiz, żeby dowiedzieć się czegoś o sobie
        </Typography>
        <Typography className={classes.subheadline} variant="subheadline" component="h2" >
          Pamiętaj, im dokładniejsze będą Twoje odpowiedzi, tym lepszy wynik otrzymasz!
        </Typography>
        <div className={classes.buttonsContainer}>
          <Button
            variant="raised"
            color="secondary"
            className={classes.button}
            onClick={() => this.props.history.push('/quiz')}
          >
            Zaczynajmy
          </Button>
        </div>
      </div>
    );
  }
}
