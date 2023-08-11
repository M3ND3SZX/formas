'use strict'

const forma1 = document.getElementById('forma1')

function mudarCor () {
    forma1.classList.toggle('vermelho')
}

function mudarforma () {
    forma2.classList.toggle('circulo')
}

function mudartamanho () {
    forma3.classList.toggle('aumentar')
}

function rotacao () {
    forma4.classList.toggle('girar')
}

function imagem () {
    forma5.classList.toggle('adicionarfoto')
}

function rodar_cor () {
    forma6.classList.toggle('cor_giro')
}

function forma_tamanho () {
    forma7.classList.toggle('forma_tamanho')
}

function desaparecer () {
    forma8.classList.toggle('desaparecer')
}


forma1.addEventListener('click',mudarCor)

forma2.addEventListener('click',mudarforma)

forma3.addEventListener('click',mudartamanho)

forma4.addEventListener('click',rotacao)

forma5.addEventListener('click',imagem)

forma6.addEventListener('click', rodar_cor)

forma7.addEventListener('click', forma_tamanho)

forma8.addEventListener('click', desaparecer)
