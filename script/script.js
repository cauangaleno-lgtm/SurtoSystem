const btn = document.getElementById("btnfiltro");
const itens = document.getElementById("itens");
btn.addEventListener("click", () => {
    itens.classList.toggle("aberto");
})