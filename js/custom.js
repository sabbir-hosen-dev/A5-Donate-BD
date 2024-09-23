// navber stiky

const navbar = document.getElementById("steckey");
const btnWrap = document.getElementById("btn-wrap");
const header = document.getAnimations("header");

function stickyNavbar() {
  if (window.scrollY >= 100) {
    navbar.classList.add("stickyy");
    btnWrap.classList.remove("py-10");
    btnWrap.classList.add("sticky-btn");
  } else {
    navbar.classList.remove("stickyy");
    btnWrap.classList.add("py-10");
    btnWrap.classList.remove("sticky-btn");
  }
}
window.onscroll = function () {
  stickyNavbar();
};
