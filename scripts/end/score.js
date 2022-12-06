import {chances} from '../game/selectLetters.js'

export default function(){

    const containerStars = document.getElementById('stars')

    let timer = 0
    let i = 0

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
