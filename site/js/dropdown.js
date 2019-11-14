var menuBtn = document.getElementById("menuBtn");
var navMenu = document.getElementById("navMenu");

function toggleMenu(event) {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
  } else {
    navMenu.classList.add("hidden");
  }
}

menuBtn.onclick = function(event) { toggleMenu(event) };
