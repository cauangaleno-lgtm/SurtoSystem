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

const addbtn = document.getElementById("addbtn");
const fecharbtn = document.getElementById("fecharbtn");
const modal = document.getElementById("modal");
addbtn.addEventListener("click", () => {
    modal.style.display = "flex";
});
fecharbtn.addEventListener("click", () => {
    modal.style.display = "none";
});

const avancarbtn = document.getElementById("avancarbtn");
const cancelarbtn = document.getElementById("cancelarregistro");
const modal_nregistro = document.getElementById("modal_nregistro");
avancarbtn.addEventListener("click", () => {
    modal_nregistro.style.display = "flex";
});
cancelarbtn.addEventListener("click", () => {
    modal_nregistro.style.display = "none";
});