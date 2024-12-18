"use strict"

let hora = 0
let minuto = 0
let segundo = 0 
let mostradorContagem = document.querySelector('.mostradorContagem>h1')
let  rodarContagem = false


function formataçãoContagem() {
    if (hora < 10) {
        if (minuto < 10) {
            if (segundo < 10) {
                mostradorContagem.innerText = `0${hora} : 0${minuto} : 0${segundo}`
            } else {
                mostradorContagem.innerText = `0${hora} : 0${minuto} : ${segundo}`
            }
        } else {
            if (segundo < 10) {
                mostradorContagem.innerText = `0${hora} : ${minuto} : 0${segundo}`
            } else {
                mostradorContagem.innerText = `0${hora} : ${minuto} : ${segundo}`
            }
        }
    } else {
        if (minuto < 10) {
            if (segundo < 10) {
                mostradorContagem.innerText = `${hora} : 0${minuto} : 0${segundo}`
            } else {
                mostradorContagem.innerText = `${hora} : 0${minuto} : ${segundo}`
            }
        } else {
            if (segundo < 10) {
                mostradorContagem.innerText = `${hora} : ${minuto} : 0${segundo}`
            } else {
                mostradorContagem.innerText = `${hora} : ${minuto} : ${segundo}`
            }
        }
    }
}

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

    formataçãoContagem()
}

setInterval(contagem, 1000)