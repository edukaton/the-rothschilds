import React from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Home from '../../pages/home/Home'


const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default routes
