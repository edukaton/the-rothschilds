import React from 'react'
import { withStyles } from 'material-ui/styles'
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
export default class Home extends React.Component {
  state = {
    activeView: 0,
  }

  handleChange = (event, value) => {
    this.setState({ activeView: value });
  };

  render() {
    const { classes } = this.props;
    const { activeView } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={activeView} onChange={this.handleChange}>
            <Tab label="O Projekcie" href="#about" />
            <Tab label="Quiz" href="#quiz" />
            <Tab label="Wyzwania" href="#quests" />
            <Tab label="Źródła i pomoce" href="#sources" />
          </Tabs>
        </AppBar>
        {activeView === 0 && <About />}
        {activeView === 1 && <Quiz />}
        {activeView === 2 && <Quests />}
        {activeView === 3 && <Sources />}
      </div>
    );
  }
}
