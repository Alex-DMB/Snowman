import {start,game,gameover} from '../variables.js'
import optionsLetters from './optionsLetters.js'
import wordLetters from './wordLetters.js'
import {selectLetter} from './selectLetters.js'
import tip from './tip.js'

export function initGame(){
    start.setAttribute('class','hide')
    game.removeAttribute('class','hide')
    gameover.setAttribute('class','hide')
    optionsLetters()
    wordLetters()
    tip()
    selectLetter()

} window.initGame = initGame