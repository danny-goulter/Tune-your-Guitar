import React from 'react'
import { playAudio } from '../apiClient'

function Tuner () {
  return (
    <>
      <h4 className="tunerheader">Tuning Your Guitar</h4>
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
    </>
  )
}

export default Tuner
