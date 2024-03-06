const btnPomodoro = document.querySelector('.btn-pomodoro')
const btnIntervaloCurto = document.querySelector('.btn-intervalo-curto')
const btnIntervaloLongo = document.querySelector('.btn-intervalo-longo')

let textoMinuto = document.querySelector('.tempo-minuto')
let textoSegundos = document.querySelector('.tempo-segundos')

const btnComecar = document.querySelector('.btn-começar')


let interval
let minutos = 25
let segundos = 59


// Funções dos botões sendo clicados

btnPomodoro.addEventListener('click', () => {
    minutos = 25
    segundos = 59

    textoMinuto.textContent = `${minutos}`
    textoSegundos.textContent = `00`

    btnPomodoro.classList.add('active')
    btnIntervaloCurto.classList.remove('active')
    btnIntervaloLongo.classList.remove('active')

    clearInterval(interval)
})


btnIntervaloCurto.addEventListener('click', () => {
    minutos = 5
    segundos = 59

    textoMinuto.textContent = `0${minutos}`
    textoSegundos.textContent = `00`

    btnPomodoro.classList.remove('active')
    btnIntervaloCurto.classList.add('active')
    btnIntervaloLongo.classList.remove('active')
    clearInterval(interval)
})


btnIntervaloLongo.addEventListener('click', () => {
    minutos = 25
    segundos = 59

    textoMinuto.textContent = `${minutos}`
    textoSegundos.textContent = `00`

    btnPomodoro.classList.remove('active')
    btnIntervaloCurto.classList.remove('active')
    btnIntervaloLongo.classList.add('active')
    clearInterval(interval)
})




// Função do botão começar contagem


btnComecar.addEventListener('click', comecarCronometro)

function comecarCronometro() {

    interval = setInterval(() => {

        if (segundos !== 0) {
            segundos--

        } else {
            minutos--
            segundos = 59
        }

        if (minutos === 0) {
            clearInterval(interval)
        }

        textoMinuto.textContent = formatarTempo(minutos)
        textoSegundos.textContent = formatarTempo(segundos)

    }, 1000);

}


// Função para deixar o tempo formatado usando o operador ternario :) 

function formatarTempo(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
}