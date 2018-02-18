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
  subheading: {
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
@withRouter
export default class Home extends React.Component {
  render() {
    const { classes, history } = this.props;

    return (
      <div className={classes.root}>
        <Typography className={classes.title} variant="title" component="h1" >Cześć!</Typography>
        <Typography className={classes.headline} variant="headline" component="h1" >
          Stworzyliśmy ten projekt, żeby pokazać jak łatwo o manipulację w sieci.
        </Typography>
        <Typography className={classes.subheading} variant="subheading" component="h2" >
          Jeśli chcesz na własnej skórze przekonać się jak to się dzieje albo pomóc w tym innym, to dobrze trafiłeś.
        </Typography>
        <div className={classes.buttonsContainer}>
          <Button
            variant="raised"
            color="secondary"
            className={classes.button}
            onClick={() => history.push('/quiz')}
          >
            Sprawdź to na sobie
          </Button>
        </div>
        <div className={classes.footer} >
          <Typography variant="subheading" component="h2" >
            Chcesz wiedzieć skąd braliśmy inspiracje i informacje do stworzenia tego projektu?
          </Typography>
          <Button
            color="secondary"
            onClick={() => history.push('#sources')}
          >
            Pokaż listę źródeł
          </Button>
        </div>
      </div>
    );
  }
}
