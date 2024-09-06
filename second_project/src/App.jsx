import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {Button} from "@chakra-ui/react"
import Header from './components/Header'

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route to={"/"}/>
      </Routes>
    </Router>
  )
}

export default App