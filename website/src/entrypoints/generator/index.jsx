/* eslint-disable import/default */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './favicon.ico'
import './index.scss'
import Root from './Root'
import routes from './routes'

if (!window.Promise) {
  window.Promise = Promise
}

const app = document.getElementById('app')
const renderApp = appRoutes => {
  render(
    <AppContainer>
      <Root routes={appRoutes} />
    </AppContainer>,
    app,
  )
}

renderApp(routes)

if (module.hot) {
  module.hot.accept('./routes', () => {
    const newRoutes = require('./routes').default // eslint-disable-line global-require
    renderApp(newRoutes)
  })
}
