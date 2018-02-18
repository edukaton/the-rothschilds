import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Home from '../../pages/home/Home'
import Quiz from '../../pages/quiz/Quiz'


const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/quiz" component={Quiz} />
    </Switch>
  )
}

export default routes
