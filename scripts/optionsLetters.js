let position = 0
const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const letters = alphabet.split('')

const optionsLetters = document.getElementById('options_letters')

export default function(){
for( position = 0; position < letters.length; position++ ){
    const button = document.createElement('button')
    button.setAttribute('onclick', `selectLetter('${letters[position]}')`)

    const currentLetter = document.createTextNode(letters[position])
    
    button.setAttribute('id',`letter_${letters[position]}`)


    button.appendChild(currentLetter)
    optionsLetters.appendChild(button)
}

}
