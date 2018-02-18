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
    height: 500,
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
        <Typography className={classes.title} variant="title" component="h1" >Czytaj między wierszami!</Typography>
        <Typography className={classes.headline} variant="headline" component="h1" >
          Przejdź nasz quiz, żeby dowiedzieć się czegoś o sobie
        </Typography>
        <Typography className={classes.subheading} variant="subheading" component="h2" >
          Pamiętaj, im dokładniejsze będą Twoje odpowiedzi, tym lepszy wynik otrzymasz!
        </Typography>
        <div className={classes.buttonsContainer}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image="/img/q1.jpg"
            />
            <CardContent>
              <Typography variant="headline" component="h2">Piętnowanie społeczne</Typography>
              <Typography component="p">
                Quiz pokazuje mechanizmy, które pozwalają na społeczną stygmatyzację osób.
                Dopasowany do pokazywania na godzinie wychowawczej i skierowany do nastolatków.
              </Typography>
            </CardContent>
            <CardActions>
              <Button className={classes.button} size="small" color="primary" onClick={() => history.push('/quiz')} >Rozpocznij</Button>
            </CardActions>
          </Card>
          <Card className={cnames(classes.card, classes.inactive)}>
            <CardMedia
              className={classes.media}
              image="/img/q2.jpg"
            />
            <CardContent>
              <Typography variant="headline" component="h2">Piętnowanie społeczne (wersja dla najmłodszych)</Typography>
              <Typography component="p">
                Wykorzystuje formę bajki, aby w przystępny sposób wytłumaczyć, jak można krzywdzić opierając się na półprawdach.
                Podmiotem nie jest dziecko, ale główny bohater (nie chcemy wywołać zbyt silnego efektu).  Dopasowany do klas nauczania początkowego.
              </Typography>
            </CardContent>
            <CardActions><Button className={classes.button} disabled size="small" color="primary">Rozpocznij</Button></CardActions>
          </Card>
          <Card className={cnames(classes.card, classes.inactive)}>
            <CardMedia
              className={classes.media}
              image="/img/q3.jpg"
            />
            <CardContent>
              <Typography variant="headline" component="h2">Dyskredytacja w propagandzie (państwowa)</Typography>
              <Typography component="p">
                Skupia się na metodach dyskredytacji używanej przez państwa i duże organizacje. Materiał dostosowany do lekcji WOS.
              </Typography>
            </CardContent>
            <CardActions><Button className={classes.button} disabled size="small" color="primary">Rozpocznij</Button></CardActions>
          </Card>
          <Card className={cnames(classes.card, classes.inactive)}>
            <CardMedia
              className={classes.media}
              image="/img/q4.jpg"
            />
            <CardContent>
              <Typography variant="headline" component="h2">Wypaczenie tezy</Typography>
              <Typography component="p">
                Pokazujemy mechanizmy jakimi można dyskredytować każdą nawet najbardziej szczytną tezę. Materiał dostosowany do lekcji filozofii.
              </Typography>
            </CardContent>
            <CardActions><Button className={classes.button} disabled size="small" color="primary">Rozpocznij</Button></CardActions>
          </Card>
        </div>
      </div>
    );
  }
}
