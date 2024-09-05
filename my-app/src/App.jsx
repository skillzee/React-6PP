import React from 'react'
import Header from './components/Header'
import './App.css'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'



// const MyHeading = () => <h1>Heading</h1>



const a = "200gsh"
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/product/:id' element={<Product/>}/>
          <Route path='*' element={<div>Page not found 404</div> } />

        </Routes>

      </Router>
    </>
  )
}

export default App