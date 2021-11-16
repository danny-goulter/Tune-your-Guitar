import React from 'react'
import chordData from '../data/chords'
import { playAudio } from '../apiClient'

function Chords () {
  const chords = chordData.chords

  return (
    <>
      <div>
        {chords.map((chord) => {
          return <div className="chords" key={chord.id}>
            <h5 className="chordname">{chord.name}</h5>
            <img className="chordpics" src={`./images/${chord.image}`}/>
            <button id={`${chord.sound}`} onClick={playAudio}>Play</button>
          </div>
        })}
      </div>
      <div className="fingerinfo">
        <h3>A Note on Finger Numbers</h3>
        <p>
          In Guitar teaching we number the fingers on your playing hand on the fretboard (as opposed to your strumming hand over the soundhole) from left to right<br></br> starting at your index finger. So the index is 1 through to the pinky finger being 4. Your thumb is rarely used.
        </p>
        <p>
          There is a variation of the F Major chord where the thumb is used to place an F on the first fret of the bottom string as a root note of the chord but this example<br></br> requires some really nimble dexterity and is unnecessary if you just play F Major as a Barre Chord instead.
        </p>
      </div>
    </>
  )
}

export default Chords
