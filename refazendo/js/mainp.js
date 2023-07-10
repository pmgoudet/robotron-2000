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
        mudaEstatisticas (event.target.parentNode.dataset.peca, event.target.dataset.controle, event.target.parentNode)
    });
});

function somaSubtrai (operacao, controle) {
    const numPeca = controle.querySelector('[data-contador]')
    
    if (numPeca.value == 0 && operacao === '-')
        numPeca.value = 0
    else if (operacao === '-') {
        numPeca.value = parseInt(numPeca.value) - 1
    } else {
        numPeca.value = parseInt(numPeca.value) + 1
    }
}

function mudaEstatisticas (peca) {
    let soma = [0, 0, 0, 0]
    
    for (i = 0; i < contador.length; i++) {
        estatisticas.forEach((elemento) => {
            const estatistica = elemento.dataset.estatistica
            const indiceEstatistica = pecas[peca][estatistica]
            console.log(pecas[peca][estatistica])
            
            soma += parseInt(indiceEstatistica * contador[i].value)
            elemento.textContent = soma[i]
        })
    }
} 





/*
function mudaEstatisticas (peca, operacao, controle) {
    const numPeca = controle.querySelector('[data-contador]')

    estatisticas.forEach((elemento) => {
        const estatistica = elemento.dataset.estatistica
        const indiceEstatistica = pecas[peca][estatistica]

        if (numPeca.value == 1 && operacao === '-') {
            elemento.textContent = parseInt(elemento.textContent) - indiceEstatistica; 
        }      
        if (operacao == "-" && numPeca.value != '0') {
            elemento.textContent = parseInt(elemento.textContent) - indiceEstatistica
        } else if (operacao == "+") {
            elemento.textContent = parseInt(elemento.textContent) + indiceEstatistica
        }
    })
}









function mudaEstatisticas (peca) {
    for (let i = 0 ; i < contador.length ; i ++) {
        var numContador = contador[i].value
        // console.log(numContador)

        estatisticas.forEach((elemento) => {
            const estatistica = elemento.dataset.estatistica
            const indiceEstatistica = pecas[peca][estatistica]
            
            console.log(estatistica)
            console.log(peca)

            // elemento.textContent = parseInt(indiceEstatistica) * numContador
        })
    }
}

*/

