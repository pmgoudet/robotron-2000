const botoes = document.querySelectorAll('[data-controle]');
var numBotoes = document.querySelectorAll('[data-contador]');
let estatisticas = document.querySelectorAll('[data-estatistica]')

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

botoes.forEach((botao) => {
    botao.addEventListener('click', () => {
        regulaAtributos(botao);
        mudaEstatisticas(botao);
    })
});

function regulaAtributos (botao) {
    let maisMenos = botao.getAttribute('data-controle');
    let dataPeca = botao.parentElement.children[1];
    
    if (maisMenos == '-' && dataPeca.value > 0) {
        dataPeca.value = parseInt(dataPeca.value) - 1
    } else if (maisMenos == '-' && dataPeca.value == 0) {
        dataPeca.value = 0;
    } else {
        dataPeca.value = parseInt(dataPeca.value) + 1;
    }
}

function mudaEstatisticas(botao) {
    let nomePeca = botao.parentElement.dataset.peca;
    let maisMenos = botao.getAttribute('data-controle');
    let dataPeca = botao.parentElement.children[1];

    estatisticas.forEach((estatistica) => {
        const nomeEstatistica = estatistica.getAttribute('data-estatistica');
        let somaEstatistica = parseInt(pecas[nomePeca][nomeEstatistica]);
        let valorEstatistica = parseInt(estatistica.textContent);

        console.log(maisMenos)
        console.log(dataPeca.value)
        console.log(valorEstatistica)
        console.log(somaEstatistica)
        
        if (maisMenos == '-') { // AQUELE PAU DO ZERO PRO UM QUE CAGA TUDO NESSA BOSTA
            valorEstatistica -= somaEstatistica
        } else {
            valorEstatistica += somaEstatistica
        }

        estatistica.textContent = valorEstatistica
    });
}

/*
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
*/

