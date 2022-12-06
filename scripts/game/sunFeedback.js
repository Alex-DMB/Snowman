let sunTop = -100
const sun = document.getElementById('sun')
sun.style.transform = `translate(-30%, ${sunTop}%)`

export default function(){
    
    sunTop+=10
    sun.style.transition = '1s'
    sun.style.transform = `translate(-30%, ${sunTop}%)`


}
