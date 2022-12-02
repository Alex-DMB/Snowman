const start = document.getElementById('start')
const game = document.getElementById('game')
const gameover = document.getElementById('gameover')

function reload(){
    window.location.reload()
}

function initScreen(){
    start.removeAttribute('class','hide')
    game.setAttribute('class','hide')
    gameover.setAttribute('class','hide')
}

function initGame(){
    start.setAttribute('class','hide')
    game.removeAttribute('class','hide')
    gameover.setAttribute('class','hide')
}

function gameOver(){
    start.setAttribute('class','hide')
    game.setAttribute('class','hide')
    gameover.removeAttribute('class','hide')
    score()

}



initScreen()
const words = ['React','Javascript','tres','quatro','cinco','seis','sete','oito','nove','dez',]

const word = words[Math.floor(Math.random() * words.length)].toLowerCase()

let chances = 5

let hits = 0


// Criação dos Spans da Palavra

for( position = 0; position < word.length; position++) {
    const wordLetters = document.getElementById('word_letters')
    const span = document.createElement('span')

    span.setAttribute('id', position)
    wordLetters.appendChild(span)
}


const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const letters = alphabet.split('')

const optionsLetters = document.getElementById('options_letters')


// Criação das Opções de Letras
for( position = 0; position < letters.length; position++ ){
    const button = document.createElement('button')
    button.setAttribute('onclick', `selectLetter('${letters[position]}')`)
    
    const currentLetter = document.createTextNode(letters[position])
    
    button.setAttribute('id',`letter_${letters[position]}`)


    button.appendChild(currentLetter)
    optionsLetters.appendChild(button)
}



let imageSnowman = 0
let sunTop = -100
const sun = document.getElementById('sun')
sun.style.transform = `translate(-30%, ${sunTop}%)`



function sunFeedback(){
    
    sun.style.transition = '1s'
    sun.style.transform = `translate(-30%, ${sunTop}%)`
    sunTop+=10


}


const arraySnowman = [
    'img/snow0.png',
    'img/snow1.png',
    'img/snow2.png',
    'img/snow3.png',
    'img/snow4.png',
    'img/snow5.png',
    'img/snow5.png',
    'img/snow7.png',
    'img/snow8.png',

]


function snowmanFeedback(){
    
    const arraySnowmanEnd = arraySnowman.filter((item,index) => index > 4)
    let timer = 0

    const snowman = document.getElementById('snowman')

    snowman.setAttribute('src',`${arraySnowman[++imageSnowman]}`)

    if (chances === 0){

        arraySnowmanEnd.forEach((src) => {
            setTimeout(()=>{
                snowman.setAttribute('src',src)
                
            },timer)

            timer+=50
        });

    }    
            

}


// Dicas

function tip(){

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

tip()

function selectLetter(letter){

    
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
        setTimeout(gameOver,2000)


    }

    if(hits===word.length){
        setTimeout(gameOver,2000)

    }

    
}


function score(){

    const containerStars = document.getElementById('stars')

    let timer = 0


    if(chances === 5){
    
        for(i = 0; i < 3; i++){
            setTimeout(()=>{
                const star = document.createElement('i')
                star.setAttribute('class','fa-solid fa-star')
                star.setAttribute('id','star')
                containerStars.appendChild(star)
            },timer+=500)
            }

    }

    if(chances === 4){

        for(i = 0; i < 2; i++){
            setTimeout(()=>{
                const star = document.createElement('i')
                star.setAttribute('class','fa-solid fa-star')
                star.setAttribute('id','star')
                containerStars.appendChild(star)
            },timer+=500)
            
        }
        setTimeout(()=>{
            const star = document.createElement('i')
            star.setAttribute('class','fa-solid fa-star-half')
            star.setAttribute('id','star')
            containerStars.appendChild(star)
        },timer+=500)
            

    }

    if(chances === 3){
        for(i = 0; i < 2; i++){
            setTimeout(()=>{
                const star = document.createElement('i')
                star.setAttribute('class','fa-solid fa-star')
                star.setAttribute('id','star')
                containerStars.appendChild(star)
            },timer+=500)
            }
    }
    
    if(chances === 2){
        for(i = 0; i < 1; i++){
            setTimeout(()=>{
                const star = document.createElement('i')
                star.setAttribute('class','fa-solid fa-star')
                star.setAttribute('id','star')
                containerStars.appendChild(star)
            },timer+=500)
            
        }
        setTimeout(()=>{
            const star = document.createElement('i')
            star.setAttribute('class','fa-solid fa-star-half')
            star.setAttribute('id','star')
            containerStars.appendChild(star)
        },timer+=500)
    }

    if(chances === 1){
        for(i = 0; i < 1; i++){
            setTimeout(()=>{
                const star = document.createElement('i')
                star.setAttribute('class','fa-solid fa-star')
                star.setAttribute('id','star')
                containerStars.appendChild(star)
            },timer+=500)
            }
    }
    
}
