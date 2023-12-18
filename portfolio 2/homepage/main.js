const menu = document.querySelector("#menu");
const open = document.querySelector("#open");
const scrl = document.querySelector(".scroll");

var hiddenMenu = true;

open.onclick = function () {
  if (hiddenMenu) {
    menu.style.transform = "translateX(calc(100vw - 200px))";
    open.style.transform = "translateX(-110px)";
    scrl.style.transform = "translateX(-120px)";

    menu.style.boxShadow = "0px 0px 24px 0px rgba(66, 68, 90, 1)";
    hiddenMenu = false;
    open.src = "icons/close.svg";
  } else {
    menu.style.transform = "translateX(100vw)";
    open.style.transform = "translateX(0px)";
    scrl.style.transform = "translateX(0px)";

    hiddenMenu = true;
    open.src = "icons/menu.svg";
    menu.style.boxShadow = "none";
  }
};

var scrollElement = document.getElementById("scroll");

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    scrollElement.style.display = "none";
  } else {
    scrollElement.style.display = "flex";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var navigation = document.getElementById("navigation");
  var leftNavLinks = document.querySelectorAll("#leftnav a");
  var rightNavLinks = document.querySelectorAll("#rightnav a");

  window.addEventListener("scroll", function () {
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
      navigation.style.transition = "background-color 0.3s, box-shadow 0.3s";

      navigation.style.boxShadow = "0px 0px 24px 0px rgba(51, 51, 51, 1)";
      navigation.style.backgroundColor = "white";

      leftNavLinks.forEach(function (link) {
        link.style.transition = "color 0.3s";
        link.style.color = "#333";
      });

      rightNavLinks.forEach(function (link) {
        link.style.transition = "opacity 0.3s";
        link.style.opacity = 0;
      });
    } else {
      navigation.style.transition = "background-color 0.3s, box-shadow 0.3s";

      navigation.style.boxShadow = "none";
      navigation.style.backgroundColor = "transparent";

      leftNavLinks.forEach(function (link) {
        link.style.transition = "color 0.3s";
        link.style.color = "white";
      });

      rightNavLinks.forEach(function (link) {
        link.style.transition = "opacity 0.3s";
        link.style.opacity = 1;
      });
    }
  });
});

const elements = document.querySelectorAll(".element");
const p = document.querySelector("#nextSlide");
const prevButton = document.querySelector("#previosSlide");
let currentElement = 1;

p.onclick = function () {
  slidingElements();
};

prevButton.onclick = function () {
  currentElement = (currentElement - 1 + elements.length) % elements.length;
  hideAllElements();
  elements[currentElement].classList.add("choosenElement");
  elements[currentElement].classList.remove("hidden");
};

function autoChangeImage() {
  setInterval(function () {
    slidingElements();
  }, 5000);
}

function slidingElements() {
  hideAllElements();

  szer = sprawdzSzerokoscOkna();
  if (szer == true) {
    elements[currentElement + 1].classList.add("choosenElement");
    elements[currentElement % elements.length].classList.remove("hidden");
    if (currentElement == 4) {
      elements[currentElement + 1].classList.add("choosenElement");
      elements[currentElement].classList.remove("hidden");
      currentElement = 0;
    } else {
      currentElement = currentElement + 1;
    }
  } else {
    elements[currentElement + 1].classList.add("choosenElement");
    elements[currentElement % elements.length].classList.remove("hidden");
    elements[(currentElement + 1) % elements.length].classList.remove("hidden");
    elements[(currentElement + 2) % elements.length].classList.remove("hidden");
    if (currentElement == 4) {
      elements[currentElement + 1].classList.add("choosenElement");
      elements[currentElement + 2].classList.remove("hidden");
      currentElement = 0;
    } else {
      currentElement = currentElement + 1;
    }
  }
}

function hideAllElements() {
  elements.forEach((element) => {
    element.classList.add("hidden");
    element.classList.remove("choosenElement");
  });
}

function sprawdzSzerokoscOkna() {
  var szerokoscOkna =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  return szerokoscOkna < 900;
}

window.onload = function () {
  sprawdzSzerokoscOkna();
  slidingElements();
};

window.addEventListener("resize", function () {
  sprawdzSzerokoscOkna();
  slidingElements();
});

const currentYear = document.querySelector("#copyRight span");
const today = new Date();

currentYear.innerHTML = today.getFullYear();
