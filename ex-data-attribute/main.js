const aparece = document.querySelector('[data-aparece]')
const desaparece = document.querySelector('[data-desaparece]')
const lista = document.querySelector('.lista')

lista.style.display = "none";
desaparece.style.display = "none";

function mostraTintas () {
    lista.style.display = "block";
    desaparece.style.display = "block";
}

function apagaTintas () {
    lista.style.display = "none";
    desaparece.style.display = "none";
}




/*  

const lista = document.querySelector("ul");
document.querySelector("#botao").addEventListener("click", () => {
  lista.setAttribute("data-lista", "mostrar");
});

document.querySelector(".close").addEventListener("click", () => {
  lista.setAttribute("data-lista", "esconder");
});  


*/