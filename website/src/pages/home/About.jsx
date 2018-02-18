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
    margin: 100,
  },
  button: {
    margin: 20,
    padding: 20,
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 100,
  }
}))
export default class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="title" component="h1" >Cześć!</Typography>
        <Typography className={classes.headline} variant="headline" component="h1" >
          Stworzyliśmy ten projekt, żeby pokazać jak łatwo o manipulację w sieci.
        </Typography>
        <Typography className={classes.subheadline} variant="subheadline" component="h2" >
          Jeśli chcesz na własnej skórze przekonać się jak to się dzieje albo pomóc w tym innym, to dobrze trafiłeś.
        </Typography>
        <div className={classes.buttonsContainer}>
          <Button variant="raised" color="secondary" className={classes.button}>
            Chcę sprawdzić jak to działa
          </Button>
          <Button variant="raised" color="secondary" className={classes.button}>
            Chcę sprawdzić wiedzę
          </Button>
        </div>
        <div className={classes.footer} >
          <Typography variant="subheadline" component="h2" >
            Chcesz wiedzieć skąd braliśmy inspiracje i informacje do stworzenia tego projektu?
          </Typography>
          <Button color="secondary">
            Pokaż listę źródeł
          </Button>
        </div>
      </div>
    );
  }
}
