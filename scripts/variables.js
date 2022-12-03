export const start = document.getElementById('start')
export const game = document.getElementById('game')
export const gameover = document.getElementById('gameover')

const words = ['React','Javascript']
const words2 = ['React','Javascript','tres','quatro','cinco','seis','sete','oito','nove','dez',]

export const word = words[Math.floor(Math.random() * words.length)].toLowerCase()

