import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { Provider } from 'mobx-react'

import MuiThemeProviderNext from 'material-ui/styles/MuiThemeProvider'
import createMuiTheme from 'material-ui/styles/createMuiTheme'


import quizStore from '../../stores/QuizStore'
import questStore from '../../stores/QuestStore'

const theme = {
  zIndex: {
    popover: 2147483649,
    dialogOverlay: 2147483646,
    dialog: 2147483647,
    layer: 2147483647,
  },
  appBar: {
    height: 40,
  },
  spacing: {
    unit: 5,
  },
  palette: {
    primary: {
      main: '#4caf50',
    },
    secondary: {
      main: '#ffca28',
    },
  },
}

export default class Root extends React.Component {
  render() {
    return (

      <MuiThemeProviderNext theme={createMuiTheme(theme)}>
        <Provider quizStore={quizStore} questStore={questStore} >
          <Router>
            {this.props.routes()}
          </Router>
        </Provider>
      </MuiThemeProviderNext>
    )
  }
}
