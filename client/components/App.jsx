import React from 'react'
import { Link, HashRouter as Router } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Header from '../components/Header'
import Home from './Home'

import Nav from './Nav'

const App = () => {
  return (
    <>
      <Header />
      <div className="nav">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
