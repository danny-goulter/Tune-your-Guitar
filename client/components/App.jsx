import React from 'react'
import Header from '../components/Header'
import Tuner from '../components/Tuner'

const App = () => {
  return (
    <>
      <Header />
      <Tuner />
      <h4>Tuning Your Guitar</h4>
      <p>Learning to tune your Guitar is relatively straight-forward when compared to actually learning to play and should definitely be the first skill you master when you begin to learn the instrument.</p>
      <p>Clicking on each of the buttons above will play an audio recording of what each string should sound like, you can use this to adjust the tuning pegs on your Guitar until you hear the same sound.</p>
      <h4>Some tips:</h4>
      <ul>
        <li>Retune your Guitar often: Ideally the tuning should be checked every time before you play, especially before a performance. It is surprising how many things can affect the pitch of your strings; temperature changes and humidity around where your Guitar is stored, string lifespan, picking styles of play or bending/sliding strings can all lead strings to loosen and their note output to alter</li>
        <li>Replace your strings when needed: When you start to see wear on the strings or you can feel bumps or roughness when you run your finger along a string these are signs that a replacement is needed. If a string breaks it can be very dangerous (and sometimes painful). Also, never replace one string at a time, if one needs replacing just do the whole Guitar. If one has gone chances are the others are not far off.</li>
        <li>Do not Tune too fast: </li>
      </ul>
    </>
  )
}

export default App
