import React from 'react'
import { Route, Routes } from 'react-router'
import Header from '../components/Header'
import Home from './Home'
import Nav from './Nav'
import Video from './Video'
import About from './About'
import Footer from './Footer'

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
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
