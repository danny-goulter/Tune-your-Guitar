import React, { useState, useEffect } from 'react'
import { playAudio } from '../apiClient'

const App = () => {
  // const guitarStrings = ['firstE.wav', 'secondB.wav', 'thirdG.wav', 'fourthD', 'fifthA', 'sixthE.wav']
  return (
    <>
      <h1>Tune and Learn Your Guitar</h1>
      <img className="guitar" src="./images/guitar.png" alt="a guitar and its tuning pegs"/><br></br>
      <p>||--------------------------------------------------||<button id="sixthE" onClick={playAudio}>6 - E</button></p>
      <p>||--------------------------------------------------||<button id="fifthA" onClick={playAudio}>5 - A</button></p>
      <p>||--------------------------------------------------||<button id="fourthD" onClick={playAudio}>4 - D</button></p>
      <p>||--------------------------------------------------||<button id="thirdG" onClick={playAudio}>3 - G</button></p>
      <p>||--------------------------------------------------||<button id="secondB" onClick={playAudio}>2 - B</button></p>
      <p>||--------------------------------------------------||<button id ="firstE" onClick={playAudio}>1 - E</button></p>
    </>
  )
}

export default App
