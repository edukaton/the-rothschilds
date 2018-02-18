import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Quiz from '../../pages/quiz/Quiz'
import Quest from '../../pages/quest/Quest'


const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quiz" component={Quiz} />
      <Route exact path="/quest" component={Quest} />
    </Switch>
  )
}

export default routes
