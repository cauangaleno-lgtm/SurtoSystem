const btn = document.getElementById("btnfiltro");
const itens = document.getElementById("itens");
const btnsave = document.getElementById("btnfiltsave");
btn.addEventListener("click", () => {
    itens.classList.toggle("aberto");
})
btnsave.addEventListener("click", () => {
    itens.classList.remove("aberto");
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

const detaiconcbtn = document.getElementsByClassName("concluido");
const concbtn = document.getElementsByClassName("fecharregistro");
const modalconc = document.getElementsByClassName("modal_detai_concluido");
concbtn.addEventListener("click", () => {
    modalconc.style.display = "flex";
});
cancelarbtn.addEventListener("click", () => {
    modalconc.style.display = "none";
});