import {start,game,gameover} from '../variables.js'
import score from '../score.js'

export function gameOver(){
    start.setAttribute('class','hide')
    game.setAttribute('class','hide')
    gameover.removeAttribute('class','hide')
    score()

} window.gameOver = gameOver
