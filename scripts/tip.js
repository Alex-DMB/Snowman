import { word } from './variables.js'

export default function(){

    const tipLetter1 = word[Math.floor(Math.random() * word.length)]
    const tipLetter2 = word[Math.floor(Math.random() * word.length)]


    if(word.length >= 8){
        if (tipLetter1 === tipLetter2){
        
            return selectLetter(tipLetter1)
        }
        else {
            selectLetter(tipLetter1)
            selectLetter(tipLetter2)
        }
    }

    if(word.length >= 5 && word.length <= 7){
        return selectLetter(tipLetter1)
    }

}