import {chances} from './selectLetters.js'
let imageSnowman = 0

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


export default function(){
    
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