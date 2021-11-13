import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <h4><Link to="/">Home</Link></h4>
      <h4>About</h4>
      <h4><Link to="/videos">How To Videos</Link></h4>
      <h4>Open Chords</h4>
      <h4>Barre Chords</h4>
      <h4>Helpful Resources</h4>
    </>
  )
}

export default Nav
