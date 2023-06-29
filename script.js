const btnSideMenu = document.querySelector(".btn-menu-mobile");
const sideMenu = document.querySelector(".side-menu");
const icon = document.querySelector(".iconBtn");

function switchMenu() {
  sideMenu.classList.toggle("side-menu-active");

  const iconBars = btnSideMenu.classList.contains("btn-menu-mobile");

  btnSideMenu.classList.toggle("btn-menu-mobile");

  if (iconBars) {
    icon.setAttribute("src", "./midia/close-icon.png");
  } else {
    icon.setAttribute("src", "./midia/bars-icon.png");
  }
}

btnSideMenu.addEventListener("click", () => {
  switchMenu();
});

const btnModals = document.querySelectorAll(".btn-modal");
const popup = document.querySelector(".popup");
const overlayModal = document.querySelector(".overlay-modal");

for (let i = 0; i < btnModals.length; i++) {
  btnModals[i].addEventListener("click", function() {
    popup.classList.add("active")
    overlayModal.style.visibility = "visible"
  })
}

document.querySelector(".popup .btn-fechar").
addEventListener("click", function(){
  document.querySelector(".popup").classList.remove("active")
  document.querySelector(".overlay-modal").style.visibility = "hidden"
})
