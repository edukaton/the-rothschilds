import React from 'react'
import cnames from 'classnames'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'

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
    margin: 50,
  },
  button: {
    // marginLeft: 'auto',
    // marginRight: 'auto',
  },
  media: {
    height: 200,
  },
  card: {
    textAlign: 'left',
    width: 350,
    minHeight: 400,
    display: 'inline-grid',
    margin: 20,
  },
  inactive: {
    opacity: 0.5,
  }
}))
@withRouter
export default class Home extends React.Component {
  render() {
    const { classes, history } = this.props;

    return (
      <div>
        <Typography className={classes.title} variant="title" component="h1" >Wiesz wszystko o manipulacji?</Typography>
        <Typography className={classes.headline} variant="headline" component="h1" >
          Ukończ nasze wyzwanie, a za wysoki wynik czeka Cię nie byle prezent
        </Typography>
        <Typography className={classes.subheading} variant="subheading" component="h2" >
          Jeśli rzeczywiście znasz się na rzeczy, to powinna być tylko formalność...
        </Typography>
        <div>
          <div className={classes.buttonsContainer}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image="/img/t1.jpg"
              />
              <CardContent>
                <Typography variant="headline" component="h2">Pudelkobranie</Typography>
                <Typography component="p">
                  Ktoś tu manipuluje. Powiedz, jakie techniki pomogły oczernić bohatera artykułu.
                </Typography>
              </CardContent>
              <CardActions>
                <Button className={classes.button} size="small" color="primary" onClick={() => history.push('/quest')} >Rozpocznij</Button>
              </CardActions>
            </Card>
            <Card className={cnames(classes.card, classes.inactive)}>
              <CardMedia
                className={classes.media}
                image="/img/t2.jpg"
              />
              <CardContent>
                <Typography variant="headline" component="h2">Membuster</Typography>
                <Typography component="p">
                  Zmierz się z memami wypaczającymi informacje. Krótko i atrakcyjnie nie zawsze znaczy prawdziwie.
                </Typography>
              </CardContent>
              <CardActions><Button className={classes.button} disabled size="small" color="primary">Rozpocznij</Button></CardActions>
            </Card>
            <Card className={cnames(classes.card, classes.inactive)}>
              <CardMedia
                className={classes.media}
                image="/img/t3.jpg"
              />
              <CardContent>
                <Typography variant="headline" component="h2">Wciskanie kitu przy pomocy bitów</Typography>
                <Typography component="p">
                  Rozmowa na messengerze, nie daj się wkręcić w coś, czego nie czujesz. Nawet w rozmowie z ziomkami.
                </Typography>
              </CardContent>
              <CardActions><Button className={classes.button} disabled size="small" color="primary">Rozpocznij</Button></CardActions>
            </Card>
            <Card className={cnames(classes.card, classes.inactive)}>
              <CardMedia
                className={classes.media}
                image="/img/t4.jpg"
              />
              <CardContent>
                <Typography variant="headline" component="h2">InfuenSer</Typography>
                <Typography component="p">
                  Coś tu śmierdzi. Czy zasięgi dają monopol na prawdę, no nie. Obejrzyj wideo i wskaż manipulacje.
                </Typography>
              </CardContent>
              <CardActions><Button className={classes.button} disabled size="small" color="primary">Rozpocznij</Button></CardActions>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
