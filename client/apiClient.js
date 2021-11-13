// import request from 'superagent'

export function playAudio (e) {
  console.log(e.target.id)
  const stringSound = new Audio(`./audio/${e.target.id}.wav`)
  stringSound.play()
}
