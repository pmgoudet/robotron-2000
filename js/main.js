const botoes = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatisticas]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

botoes.forEach( (botao) => { 
    botao.addEventListener('click', (evento) => {
        somaSubtrai(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.peca, evento.target.dataset.controle)
    })
})

function somaSubtrai (operacao, controle) {
    const numPeca = controle.querySelector('[data-contador]')

    if (operacao === '-') {
        numPeca.value = parseInt(numPeca.value) - 1
    } else {
        numPeca.value = parseInt(numPeca.value) + 1
    }   
} 

function atualizaEstatisticas(peca, operacao) {
    estatisticas.forEach((element) => {
        if (operacao === '-') { 
            element.textContent = parseInt(element.textContent) - pecas[peca][element.dataset.estatisticas]
        } else {
            element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatisticas]
        }
    })
}

/*TROCA DE COR*/

const trocaCor = document.querySelector('#trocacor')
var robo = document.querySelector('.robo')
const robos = ['../img/robotron-amarelo.png', '../img/robotron-branco.png', '../img/robotron-preto.png', '../img/robotron-rosa.png', '../img/robotron-vermelho.png']
let i = 0

trocaCor.addEventListener('click', (evento) => {
    robo.src = robos[i]
    i = i + 1
    if (i > 4) {
        i = 0
    }
})
