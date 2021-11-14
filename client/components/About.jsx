import React from 'react'
import { Link } from 'react-router-dom'

function About () {
  return (
    <>
      <div>
        <h4>About this Website</h4>
        <p>
          This website assumes you already know a little about Guitars and know some rudimentary playing techniques. If you have not started learning the instrument yet and you are starting right at the beginning there are lots of helpful resources and other online tutorials and courses out there. Please refer to our <Link to="/resources" className="links">Helpful Resources</Link> page for more info.
        </p>
        <p>
          On this page I use Standard Tuning to help you setup your Guitar. In you own time I recommend you research other Tunings, play along with some songs requires you to use different note configurations.
        </p>
        <h4>Tips for Tuning and Taking Care of Your Guitar:</h4>
        <ul>
          <li>
          Retune your Guitar often: Ideally the tuning should be checked every time before you play, especially before a performance. It is surprising how many things can affect the pitch of your strings; temperature changes/humidity around where your Guitar is stored, string lifespan, picking styles of play or bending/sliding on the fretboard can all lead the strings to loosen and their note output to alter.
          </li>
          <br></br>
          <li>
          Replace your strings when needed: When you start to see wear on the strings or you can feel bumps or roughness when you run your finger along a string these are signs that a replacement is needed. If a string breaks it can be very dangerous (and sometimes painful). Also, never replace one string at a time, if one needs replacing just do the whole Guitar. If one has gone chances are the others are not far off.
          </li>
          <br></br>
          <li>
          Do not Tune too fast: Any major changes in string tension too quickly can decrease the lifespan of the string and cause it to snap. If you have to tune the string up or down a long way, do it slowly.
          </li>
          <br></br>
        </ul>
      </div>
    </>
  )
}

export default About
