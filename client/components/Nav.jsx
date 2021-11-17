import React from 'react'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <>
      <h4>- <Link to="/" className="links">Home</Link></h4>
      <h4>- <Link to="/about" className="links">About</Link></h4>
      <h4>- <Link to="/videos" className="links">How To Videos</Link></h4>
      <h4>- <Link to="/chords" className="links">Open Chords</Link></h4>
      <h4>- <Link to="/barrechords" className="links">Barre Chords</Link></h4>
      <h4>- <Link to="/resources" className="links">Helpful Resources</Link></h4>
    </>
  )
}

export default Nav
