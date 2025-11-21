const btn = document.getElementById("btnfiltro");
const itens = document.getElementById("itens");
btn.addEventListener("click", () => {
    itens.classList.toggle("aberto");
})

const navbtn = document.getElementById("butnav");
const navna = document.getElementById("navnav2");
navbtn.addEventListener("click", () => {
    navna.classList.toggle("aberto");
})

const navdashbut = document.getElementById("butnav1");
const navdash = document.getElementById("navnav1");
navdashbut.addEventListener("click", () => {
    navdash.classList.toggle("aberto");
})