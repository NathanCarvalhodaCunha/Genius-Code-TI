var menuIcon = document.querySelector(".menu-icon");
var ul = document.querySelector(".ul");
var home = document.querySelector(".nav-home");
var sobre = document.querySelector(".nav-sobre");
var contato = document.querySelector(".nav-contato");

function menuAtivo (){
    if (ul.classList.contains("ativo")) {
        ul.classList.remove("ativo");
        document.querySelector(".menu-icon img").src = "./Images/menu.png";
    }else{
        ul.classList.add("ativo");
        document.querySelector(".menu-icon img").src = "./Images/close.png";
    }
}
function scrollAtivo (){
    if (ul.classList.contains("ativo")) {
        ul.classList.remove("ativo");
        document.querySelector(".menu-icon img").src = "./Images/menu.png";
    }
}

menuIcon.addEventListener("click",menuAtivo);
home.addEventListener("click", scrollAtivo);
sobre.addEventListener("click", scrollAtivo);
contato.addEventListener("click", scrollAtivo);
