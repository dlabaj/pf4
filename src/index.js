import React from 'react'
import { render } from 'react-dom'
import SimpleLoginPage from './components/LoginPage'

document.addEventListener('DOMContentLoaded', () => {
  render(<SimpleLoginPage />, document.getElementById('root'))
})
