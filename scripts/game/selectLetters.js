import { word } from '../variables.js'
import sunFeedback from './sunFeedback.js'
import snowmanFeedback from './snowmanFeedback.js'
import { gameOver } from '../end/end.js'

let position = 0
export let chances = 5
let hits = 0

export function selectLetter(letter){

    let hit = false
    
    for(position = 0; position < word.length; position++){
        if(letter === word[position]){
            
            
            const currentLetter = document.createTextNode(letter)
            
            const span = document.getElementById(position)
            span.appendChild(currentLetter)
            
            const optionButton = document.getElementById(`letter_${word[position]}`)
            optionButton.classList.add('right')
            optionButton.removeAttribute('onclick')

            hit = true
            hits++
        }
        
  
    }

    if (hit===false){
        const optionButton = document.getElementById(`letter_${letter}`)
        optionButton.classList.add('wrong')
        optionButton.removeAttribute('onclick')

        chances--
        sunFeedback()
        snowmanFeedback()

        
    }

    if(chances === 0){
        setTimeout(gameOver,100)


    }

    if(hits===word.length){
        setTimeout(gameOver,100)

    }

    
} window.selectLetter = selectLetter