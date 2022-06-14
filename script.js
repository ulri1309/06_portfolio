window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");
  document.querySelector(".menu_forside").classList.add("slide_right");
}
