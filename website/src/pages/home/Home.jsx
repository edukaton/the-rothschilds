import React from 'react'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button'
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'

import About from './About'
import Quiz from './Quiz'
import Quests from './Quests'
import Sources from './Sources'

@withStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
}))
@withRouter
export default class Home extends React.Component {
  render() {
    const { classes, location } = this.props;
    let View = null
    let activeView = null
    switch (location.hash) {
    case '#quiz':
      View = Quiz
      activeView = 1
      break;
    case '#quests':
      View = Quests
      activeView = 2
      break;
    case '#sources':
      View = Sources
      activeView = 3
      break;
    default:
      activeView = 0
      View = About
    }

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={activeView}>
            <Tab label="O Projekcie" href="#about" />
            <Tab label="Quiz" href="#quiz" />
            <Tab label="Wyzwania" href="#quests" />
            <Tab label="Źródła i pomoce" href="#sources" />
          </Tabs>
        </AppBar>
        <View />
      </div>
    );
  }
}
