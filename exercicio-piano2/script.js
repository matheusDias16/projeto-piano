
const teclas = document.querySelectorAll(".key")

function tocarNota(event) {
  
  let audioKeyCode = pegarNota(event);

  
  const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)

  
  const cantFoundAnyKey = !key

  if(cantFoundAnyKey) {
    return;
  }

  addTocar(key)
  tocarAudio(audioKeyCode)
}

function addTocar(key) {
  key.classList.add('playing')
}

function pegarNota(event) {
  let keyCode;

  const teclado = event.type === "keydown"
  if(teclado) {
    keyCode = event.keyCode
  } else {
    keyCode = event.target.dataset.key
  }

  return keyCode
}

function tocarAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
  audio.currentTime = 0;
  audio.play()
}

function removerToque(event) {
  event.target.classList.remove("playing")
}

function registrarEventos() {
  
  teclas.forEach( function(key) {
    key.addEventListener("click", tocarNota)
    key.addEventListener("transitionend", removerToque)
  })

  
  window.addEventListener("keydown", tocarNota)
}

window.addEventListener("load", registrarEventos)