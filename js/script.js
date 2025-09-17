const hamburguer = document.getElementById("hamburguer");
const navMenu = document.getElementById("nav-menu");

hamburguer.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburguer.classList.toggle("active");
});
