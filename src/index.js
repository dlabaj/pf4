import "@babel/polyfill"
import 'core-js/es7/object'
import React from 'react'
import { render } from 'react-dom'
import SimpleLoginPage from './components/LoginPage'
document.addEventListener('DOMContentLoaded', () => {
  render(<SimpleLoginPage />, document.getElementById('root'))
})
