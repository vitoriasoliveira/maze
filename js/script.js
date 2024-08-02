const timer = document.getElementById('timer')
const end = document.getElementById('end')

var controle = false
var tempo
var min = 1
var sec = 60

function start(){
    controle = true
    
    tempo= setInterval(function(){
        sec--

        if(sec == -1){
            min--
            seg = 59
        }

        if(min == 0 && sec == 0){
            lose()
        }
        timer.innerHTML = (sec < 10) ? min + ':0' + sec : min + ':' + sec
    },1000)
}

function lose(){
    if(controle){
        end.style.display = 'block'
        controle = false
        
        clearInterval(tempo)

        setTimeout(function(){
            window.location.reload()
        },5000)
    }
}

function win(){
    if(controle){
        end.innerHTML = 'YOU WIN'
        end.style.display = 'block'
        controle = false

        clearInterval(tempo)
         
        setTimeout(function(){
            window.location.reload()
        },5000)
    }
}