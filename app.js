
const sidebarBtn = document.querySelector(".sidebar-toggle-btn");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
const windows = document.querySelector("body");
const sidebarShadow = document.querySelector(".shadow-overlay");

function closeSidebar() {
  sidebar.classList.remove("show-sidebar");
  windows.style.overflowY = "scroll";
  sidebarShadow.classList.remove("show-shadow");
}

function sidebarShadowToggle() {
  if (sidebar.classList.contains("show-sidebar")) {
    sidebarShadow.classList.add("show-shadow");
  } else {
    sidebarShadow.classList.remove("show-shadow");
  }
}

sidebarBtn.addEventListener("click", function (event) {
  event.stopPropagation();
  sidebar.classList.add("show-sidebar");

  windows.style.overflowY = "hidden";
  window.addEventListener("click", closeSidebar);

  sidebarShadow.classList.toggle("show-shadow")
  sidebarShadowToggle();
});

closeBtn.addEventListener("click", function (event) {
  closeSidebar();
});

sidebar.addEventListener("click", function (event) {
  event.stopPropagation();
});


const navbarContainer = document.querySelector(".navbar-container");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbarContainer.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navbarContainer.classList.add("fixed-navbar");
  } else {
    navbarContainer.classList.remove("fixed-navbar");
  }
});


const forBuy = document.getElementById('forBuy');
const forRent = document.getElementById('forRent');

forBuy.addEventListener('change', () => {
    if (forBuy.checked) {
        forRent.checked = false;
    }
});

forRent.addEventListener('change', () => {
    if (forRent.checked) {
        forBuy.checked = false;
    }
});