import '@patternfly/react-core/dist/styles/base.css';
import "@babel/polyfill"
import 'core-js/es7/object'
import React from 'react'
import { render } from 'react-dom'
import {AppLoginPage} from './components'
document.addEventListener('DOMContentLoaded', () => {
  render(<AppLoginPage />, document.getElementById('root'))
})
