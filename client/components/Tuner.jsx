import React from 'react'
import { playAudio } from '../apiClient'

function Tuner () {
  return (
    <>
      <div className="tuner">
        <img className="guitar" src="./images/guitar.png" alt="a guitar and its tuning pegs"/>
        <h3>Click on the numbered buttons to hear how each string should sound.</h3>
        <p>||--------------------------------------------------||<button id="sixthE" onClick={playAudio}>6 - E</button></p>
        <p>||--------------------------------------------------||<button id="fifthA" onClick={playAudio}>5 - A</button></p>
        <p>||--------------------------------------------------||<button id="fourthD" onClick={playAudio}>4 - D</button></p>
        <p>||--------------------------------------------------||<button id="thirdG" onClick={playAudio}>3 - G</button></p>
        <p>||--------------------------------------------------||<button id="secondB" onClick={playAudio}>2 - B</button></p>
        <p>||--------------------------------------------------||<button id ="firstE" onClick={playAudio}>1 - E</button></p>

      </div>

    </>
  )
}

export default Tuner
