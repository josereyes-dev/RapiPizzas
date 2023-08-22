const hamburger = document.querySelector(".hamburger"),
navMenu = document.querySelector(".nav-menu"),
cerrar = document.querySelector(".main");


hamburger.addEventListener("click", () =>{
    hamburger.classList.toggle("activate");
    navMenu.classList.toggle("activate");
})

document.querySelector(".nav-link").forEeach(n => n.addEventListener("clic", () =>{
    hamburger.classList.remove("activate");
    navMenu.classList.remove("activate");

}))

document.querySelector(".main").forEeach(n => n.addEventListener("clic", () =>{
    cerrar.classList.remove("remove");
}))