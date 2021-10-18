import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Exchange from './Pages/Exchange'
import Home from './Pages/Home'

import './Styles/main.scss'

const App = () => {
  return (
    <Router>
      <Route path='/' exact={true} component={Home} />
      <Route path='/exchange' component={Exchange} />
    </Router>
  )
}

export default App
