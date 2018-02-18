import React from 'react'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import Snackbar from 'material-ui/Snackbar';
import { MessageList } from 'react-chat-elements'

import './quest.scss'

@withStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  title: {
    marginTop: 50,
  },
  button: {
    marginTop: 50,
  },
  headline: {
    marginTop: 25,
  },
  subheading: {
    marginTop: 10,
  },
  chat: {
    margin: '20px auto 90px',
    maxWidth: 800,
    padding: 20,
    backgroundColor: '#FFECB3',
  },
  choiceBox: {
    marginTop: 20,
    marginTop: 20,
    border: '2px black dashed',
    borderRadius: 10,
  },
  choiceContainer: {
    display: 'inline-block',
    margin: 20,
    cursor: 'pointer',
  },
  choiceImg: {
    width: 200,
  },
  inventory: {
    position: 'fixed',
    width: '100%',
    height: 75,
    bottom: 0,
  },
  inventoryTitle: {
    width: 200,
    display: 'inline-block',
    verticalAlign: 'top',
    padding: "25px 5px",
  },
  inventoryCard: {
    width: 200,
    display: 'inline-block',
    verticalAlign: 'top',
    padding: 10,
  },
  buttonSecondary: {
    margin: '20px 10px',
  }
}))
@inject('questStore')
@observer
@withRouter
export default class Home extends React.Component {
  state = {
    started: false,
    ended: false,
    currentEntries: [],
    nextEntry: 0,
    activeChoice: null,
    cardsWon: [],
    message: '',
  }

  handleStart = () => {
    this.setState({ started: true })
    this.handleNextEntry()
  }
  handleEnd = () => {
    this.props.history.push('/')
  }

  handleNextEntry = () => {
    const { dialog } = this.props.questStore

    if (dialog.length > this.state.nextEntry + 1) {
      const entry = dialog[this.state.nextEntry]
      const entries = this.state.currentEntries
      let wasMsg = true
      if (entry.type === 'they') {
        entries.push({
          position: 'left',
          type: 'text',
          text: entry.text,
          date: new Date(),
        })
      } else if (entry.type === 'you') {
        entries.push({
          position: 'right',
          type: 'text',
          text: entry.text,
          date: new Date(),
        })
      } else {
        wasMsg = false
      }
      if (wasMsg) {
        setTimeout(() => {
          this.setState({
            nextEntry: this.state.nextEntry + 1,
            currentEntries: entries,
          })
          this.handleNextEntry()
        }, 1000)
      } else {
        this.setState({
          nextEntry: this.state.nextEntry + 1,
          activeChoice: entry,
        })
      }
    } else {
      this.setState({ ended: true })
    }
  }

  handleChoice = (index) => {
    const entry = this.state.activeChoice
    const { cardsWon } = this.state
    let message = this.state.message
    if (index === entry.answer) {
      cardsWon.push(entry.options[entry.answer])
      message = 'Dobry wybór!'
    } else {
      message = 'Niestety źle...'
    }
    this.setState({
      message: message,
      cardsWon: cardsWon,
      activeChoice: null,
    })
    this.handleNextEntry()
    setTimeout(() => {
      this.setState({ message: ''})
    }, 3000)
  }

  render() {
    const { classes } = this.props;
    const choice = this.state.activeChoice
    if (this.state.started) {
      return (
        <div className={classes.root} >
          <Snackbar open={!_.isEmpty(this.state.message)} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} message={this.state.message} />
          <Typography className={classes.title} variant="title">Śledź rozmowę i oznacz odpowiednie manipulacje</Typography>
          <Paper className={classes.chat} >
            <MessageList
              // className='message-list'
              lockable
              toBottomHeight="100%"
              dataSource={this.state.currentEntries}
            />
            {choice && (
              <div className={classes.choiceBox} >
                <Typography className={classes.subheading} variant="title">Wybierz rodzaj zastosowanej manipulacji</Typography>
                {choice.options.map((option, index) => (
                  <div key={option} className={classes.choiceContainer} onClick={() => this.handleChoice(index)} >
                    <img className={classes.choiceImg} src={`/img/karty/${option}.jpg`} alt={option} />
                  </div>
                ))}
              </div>
            )}
          </Paper>
          <Paper className={classes.inventory} >
            <Typography className={classes.inventoryTitle} component="span" >Twoje karty:</Typography>
            {this.state.cardsWon.map((card) => (
              <img key={card} className={classes.inventoryCard} src={`/img/karty/${card}.jpg`} alt={card} />
            ))}
            {this.state.ended && <Button color="secondary" className={classes.buttonSecondary} onClick={this.handleEnd} > Zbierz karty i wyjdź</Button>}
          </Paper>
        </div>
      );
    } else {
      return (
        <div className={classes.root} >
          <Typography className={classes.title} variant="title">Śledź rozmowę i oznacz odpowiednie manipulacje</Typography>
          <Button
            variant="raised"
            color="secondary"
            className={classes.button}
            onClick={this.handleStart}
          >
            Rozpocznij
          </Button>
        </div>
      )
    }
  }
}
