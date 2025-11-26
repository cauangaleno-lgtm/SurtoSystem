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

const detaiconcbtn = document.querySelector(".concluido");
const concbtn = document.querySelector(".fecharregistro");
const modalconc = document.querySelector(".modal_detai_concluido");
detaiconcbtn.addEventListener("click", (e) => {
    e.preventDefault();
    modalconc.style.display = "flex";
});
concbtn.addEventListener("click", () => {
    modalconc.style.display = "none";
});



const detaieditbtn = document.querySelector(".editar");
const editbtn = document.querySelector(".abrireditar");
const modaledit = document.querySelector(".modal_detai_editar");
const modalpend_rasc = document.querySelector(".modal_detai_pend_rasc")
detaieditbtn.addEventListener("click", (e) => {
    e.preventDefault();
    modaledit.style.display = "flex";
});
editbtn.addEventListener("click", () => {
    modalpend_rasc.style.display = "flex";
    modaledit.style.display = "none";
});
