import {start,game,gameover} from '../variables.js'

export function initScreen(){
    start.removeAttribute('class','hide')
    game.setAttribute('class','hide')
    gameover.setAttribute('class','hide')
} window.initScreen = initScreen

