const botoes = document.querySelectorAll('[data-controle]')
const contador = document.querySelectorAll('[data-contador]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
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


botoes.forEach(element => {
    element.addEventListener('click', (event) => {
        somaSubtrai (event.target.dataset.controle, event.target.parentNode)
        mudaEstatisticas (event.target.parentNode)
    });
});

function somaSubtrai (operacao, controle) {
    const numPeca = controle.querySelector('[data-contador]')
    
    if (numPeca.value == 0 && operacao === '-')
        numPeca.value == 0
    else if (operacao === '-') {
        numPeca.value = parseInt(numPeca.value) - 1
    } else {
        numPeca.value = parseInt(numPeca.value) + 1
    }
}


function mudaEstatisticas (peca, controle) {
    estatisticas.forEach((elemento) => {
        const estatistica = elemento.dataset.estatistica
        const indiceEstatistica = pecas[peca][estatistica]
        
        if (controle == "-") {
            elemento.textContent = parseInt(elemento.textContent) - indiceEstatistica // TENTAR  parseInt(elemento.textContent) * numPeca.value
        } else {
            elemento.textContent = parseInt(elemento.textContent) + indiceEstatistica
        }
    })
}


/*


function mudaEstatisticas (peca, controle) {
    estatisticas.forEach((elemento) => {
        const estatistica = elemento.dataset.estatistica
        const indiceEstatistica = pecas[peca][estatistica]
        
        if (controle == "-") {
            elemento.textContent = parseInt(elemento.textContent) - indiceEstatistica // TENTAR  parseInt(elemento.textContent) * numPeca.value
        } else {
            elemento.textContent = parseInt(elemento.textContent) + indiceEstatistica
        }
    })
}

*/

