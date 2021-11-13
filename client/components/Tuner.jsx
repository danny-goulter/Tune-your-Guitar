import React from 'react'
import { playAudio } from '../apiClient'

function Tuner () {
  return (
    <>
      <h4>Tuning Your Guitar</h4>
      <p>Learning to tune your Guitar is relatively straight-forward when compared to actually learning to play and should definitely be the first skill you master when you begin to learn the instrument.<br></br>
        <strong>Clicking on each of the buttons below will play an audio recording of what each string should sound like, you can use this to adjust the tuning pegs on your Guitar until you can hear the same sound.</strong></p>
      <div className="tuner">
        <img className="guitar" src="./images/guitar.png" alt="a guitar and its tuning pegs"/>
        <p>||--------------------------------------------------||<button id="sixthE" onClick={playAudio}>6 - E</button></p>
        <p>||--------------------------------------------------||<button id="fifthA" onClick={playAudio}>5 - A</button></p>
        <p>||--------------------------------------------------||<button id="fourthD" onClick={playAudio}>4 - D</button></p>
        <p>||--------------------------------------------------||<button id="thirdG" onClick={playAudio}>3 - G</button></p>
        <p>||--------------------------------------------------||<button id="secondB" onClick={playAudio}>2 - B</button></p>
        <p>||--------------------------------------------------||<button id ="firstE" onClick={playAudio}>1 - E</button></p>
        <br></br>
      </div>
      <div>
        <h4>Some tips:</h4>
        <ul>
          <li>
          Retune your Guitar often: Ideally the tuning should be checked every time before you play, especially before a performance. It is surprising how many things can affect the pitch of your strings; temperature changes/humidity around where your Guitar is stored, string lifespan, picking styles of play or bending/sliding on the fretboard can all lead the strings to loosen and their note output to alter.
          </li>
          <li>
          Replace your strings when needed: When you start to see wear on the strings or you can feel bumps or roughness when you run your finger along a string these are signs that a replacement is needed. If a string breaks it can be very dangerous (and sometimes painful). Also, never replace one string at a time, if one needs replacing just do the whole Guitar. If one has gone chances are the others are not far off.
          </li>
          <li>
          Do not Tune too fast: Any major changes in string tension too quickly can decrease the lifespan of the string and cause it to snap. If you have to tune the string up or down a long way, do it slowly.
          </li>
        </ul>
      </div>
    </>
  )
}

export default Tuner
