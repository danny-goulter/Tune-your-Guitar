// import request from 'superagent'

export function playAudio (e) {
  const stringSound = new Audio(`./audio/${e.target.id}.wav`)
  stringSound.play()
}
