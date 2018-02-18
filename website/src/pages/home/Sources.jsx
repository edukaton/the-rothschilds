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
  subheading: {
    margin: "20px auto",
    minWidth: 800,
  },
  link: {
    margin: 20,
  },
  linkInside: {
    textDecoration: 'none',
    color: '#FF8F00',
  }
}))
export default class Home extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.headline} variant="headline" component="h1" >
          Bo właśnie o to chodzi, żeby buszować i weryfikować :)
        </Typography>
        <Typography style={{ maxWidth: 800 }} className={classes.subheading} variant="subheading" component="h2" >
          Bo jak czegoś nie ma w internecie to nie istnieje.
          A tak na poważnie podajemy tu źródła, które pomagają walczyć z manipulacją (niektóre po angielsku).
        </Typography>
        <ul>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="http://www.criticalthinking.pl/pytania-krytyczne/" target="_blank">Critical Thinking</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="http://www.kroliczekdoswiadczalny.pl/2017/02/bledy-w-argumentacji.html/" target="_blank">Króliczek doświadczalny</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="https://pl.wikipedia.org/wiki/B%C5%82%C4%99dy_logiczno-j%C4%99zykowe" target="_blank">Błędy logiczno językowe</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="https://quizlet.com/145997401/bledy-w-argumentacji-flash-cards/" target="_blank">Flash cards</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="http://mikroakademia.pl/turniej-debat-oksfordzkich/najczesciej-popelniane-bledy/" target="_blank">Najczęściej popełnianie błędy</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="http://niepoprawny666.blogspot.com/2014/07/bedy-logiczne-amunicja-do-dyskusji.html" target="_blank">Amunicja do dyskusji</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="http://www2.wpia.uw.edu.pl/files//podyplomowe/rzeczoznawstwo/Morek_Rafal_Sztuka_Argumentacji.pdf " target="_blank">Sztuka Argumentacji (Slajdy 68 - 86)</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="http://edukacjamedialna.edu.pl/" target="_blank">Edukacja Medialna</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="http://cyfrowa-wyprawka.org" target="_blank">Cyfrowa Wprawka</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="https://bookofbadarguments.com/" target="_blank">Book of bad arguments</a>
          </Typography>
          <Typography component="li" variant="button" className={classes.link} >
            <a className={classes.linkInside} href="https://rationalwiki.org/wiki/Logical_fallacy" target="_blank">Logical fallacy</a>
          </Typography>
        </ul>
      </div>
    );
  }
}
