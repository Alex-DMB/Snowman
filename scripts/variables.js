export const start = document.getElementById('start')
export const game = document.getElementById('game')
export const gameover = document.getElementById('gameover')

const words = ['Sorvete','Garoto','Chocolate','Cachorro','Gato','Computador','Software','Azul','Branco','Vermelho','Amor','Amiga','Banana','Melancia']

export const word = words[Math.floor(Math.random() * words.length)].toLowerCase()

