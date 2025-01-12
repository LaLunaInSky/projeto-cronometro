"use strict"

let hora = 0
let minuto = 0
let segundo = 0 
let mostradorContagem = document.querySelector('.mostradorContagem>h1')
let  rodarContagem = false

function contagem() {
    if (rodarContagem == true) {
        segundo++
    }

    if (segundo > 59) {
        minuto++
        segundo = 0
    }

    if (minuto > 59) {
        hora++
        minuto = 0
    }

    if (hora > 99) {
        hora = 0
        minuto = 0
        segundo = 0
    }

    mostradorContagem.innerText = `${hora < 10 ? `0${hora}` : hora} : ${minuto < 10 ? `0${minuto}` : minuto} : ${segundo < 10 ? `0${segundo}` : segundo}`
}

setInterval(contagem, 1000)