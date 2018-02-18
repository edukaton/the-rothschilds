import React from 'react'
import _ from 'lodash'
import { inject, observer } from 'mobx-react'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import { MenuItem, MenuList } from 'material-ui/Menu';

@inject('infoStore')
@observer
export default class Question extends React.Component {
  render() {
    const { question, onAnswer } = this.props
    const sex = this.props.infoStore.sex
    const reg = /{[^\/]*\/[^}]*}/gi
    if (question.text) {
      const matches = question.text.match(reg)
      _.forEach(matches, (match) => {
        const middle = match.indexOf('/')
        const version = this.props.infoStore.sex === 'M'
          ? match.substring(1, middle)
          : match.substring(middle + 1, match.length - 1)
        question.text = question.text.replace(match, version)
      })
    }
    return (
      <div>
        <Typography variant="headline" component="h2">{question.text}</Typography>
        <MenuList>
          {question.answers.map((answer, index) => (
            <MenuItem key={answer} onClick={() => onAnswer(index)} >{answer}</MenuItem>
          ))}
        </MenuList>
      </div>
    )
  }
}
