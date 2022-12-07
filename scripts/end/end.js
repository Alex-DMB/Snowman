import {start,game,gameover} from '../variables.js'
import score from './score.js'
import {feedbackSound} from '../audio.js'



export function gameOver(){
    start.setAttribute('class','hide')
    game.setAttribute('class','hide')
    gameover.removeAttribute('class','hide')
    score()
    setTimeout(()=>{
        feedbackSound.play()
    },500)

} window.gameOver = gameOver
