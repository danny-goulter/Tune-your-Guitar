import React from 'react'
import { Route, Routes } from 'react-router'
import Header from '../components/Header'
import Home from './Home'
import Nav from './Nav'
import Video from './Video'

const App = () => {
  return (
    <>
      <Header />
      <div className="nav">
        <Nav />
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/videos" element={<Video/>}/>
      </Routes>
    </>
  )
}

export default App
