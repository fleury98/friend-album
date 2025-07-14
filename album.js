"use strict";


function fillHome() {
  const home = document.querySelector(".material-symbols-outlined");
  home.style.fontVariationSettings = "'FILL' 1";
}

function homeOutlined() {
  const home = document.querySelector(".material-symbols-outlined");
  home.style.fontVariationSettings = "'FILL' 0";
}

function openDisplay() {
  const picture = document.getElementById("closeUp");
  picture.style.display = "none";
}

const hoverHouse = document.querySelector(".material-symbols-outlined");
const clickPicture = document.getElementById("closeUp");
hoverHouse.addEventListener("mouseover", fillHome);
hoverHouse.addEventListener("mouseout", homeOutlined);
clickPicture.addEventListener("click",openDisplay);
