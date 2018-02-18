import React from 'react'
import _ from 'lodash'
import { inject, observer } from 'mobx-react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Card';

import Question from '../question/Question'

@withStyles((theme) => ({
root: {
  maxWidth: 800,
  marginBottom: 20,
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: 25,
},
}))
@inject('infoStore')
@observer
export default class Test extends React.Component {
  state = {
    activeQuestion: 0,
  }

  isInfoValid = () => {
    if (_.isEmpty(this.props.infoStore.name))
      return false
    else
      return true
  }

  handleAnswer = (index) => {
    const question = this.props.infoStore.questions[this.state.activeQuestion]
    this.props.infoStore.addAnswer(question.id, index)

    if (this.props.infoStore.questions.length === this.state.activeQuestion + 1)
      this.props.onDone()
    else
      this.setState({ activeQuestion: this.state.activeQuestion + 1 })
  }
  render() {
    const { classes } = this.props
    const question = this.props.infoStore.questions[this.state.activeQuestion]

    return (
      <Paper className={classes.root}>
        <Question question={question} onAnswer={this.handleAnswer} />
      </Paper>
    )
  }
}
