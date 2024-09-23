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

const input = document.getElementsByClassName("donate-input");
const button = document.getElementsByClassName("donate ");
const message = document.getElementsByClassName("rong-message");
const staticAmount = document.getElementsByClassName("staticAmount");
const titels = document.getElementsByClassName("title");
const balance = document.getElementById("balance");

const nKhali = document.getElementById("nKhali");
const feni = document.getElementById("feniAmount");
const tsc = document.getElementById("tscAmount");

let totalAmaunt = parseFloat(balance.innerText);
let nouaKhaliAmount = parseFloat(nKhali.innerText);
let feniAmount = parseFloat(feni.innerText);
let tscAmount = parseFloat(tsc.innerText);

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    const inputValue = input[i].value;

    if (inputValue == "" || inputValue < 0 || isNaN(inputValue)) {
      message[i].classList.remove("hidden");
      input[i].value = "";
      return;

    } else {
      const inputBalance = parseFloat(inputValue);

      if (totalAmaunt < inputBalance) {
        alert("Your Amount id low");
        input[i].value = "";
        return;

      } else {
        const modal = document.getElementById("modal");
        modal.classList.remove("hidden");

        totalAmaunt = totalAmaunt - inputBalance;

        balance.innerText = totalAmaunt;

        let cardValue = parseFloat(staticAmount[i].innerText);

        staticAmount[i].innerText = cardValue + inputBalance;
        let title = titels[i].innerText;
        historyAdd(inputBalance,title)
        

        document
          .getElementById("modal-cencle")
          .addEventListener("click", function () {
            modal.classList.add("hidden");
          });
      }

      message[i].classList.add("hidden");
      input[i].value = "";
    }
  });
}


document.getElementById("blog").addEventListener("click", function(){
  window.location.href = '../Blog.html';
})