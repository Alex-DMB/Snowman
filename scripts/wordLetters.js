import { word } from './variables.js'

let position = 0

export default function(){
for( position = 0; position < word.length; position++) {
    const wordLetters = document.getElementById('word_letters')
    const span = document.createElement('span')

    span.setAttribute('id', position)
    wordLetters.appendChild(span)
}
}