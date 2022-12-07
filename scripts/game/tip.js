import { word } from '../variables.js'

export const tipLetter1 = word[Math.floor(Math.random() * word.length)]
export const tipLetter2 = word[Math.floor(Math.random() * word.length)]
export let tips = false
export default function(){

    if(word.length >= 8){
        if (tipLetter1 === tipLetter2){
        
            selectLetter(tipLetter1)
            tips = true
        }
        else {
            selectLetter(tipLetter1)
            selectLetter(tipLetter2)
            tips = true
        }
    }

    if(word.length >= 5 && word.length <= 7){
        selectLetter(tipLetter1)
        tips = true
    }

    if(word.length < 5){
        tips = true
    }

}