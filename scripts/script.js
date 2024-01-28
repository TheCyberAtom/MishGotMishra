function toggleMenu() {
  let menuIcon = document.getElementById("menu-icon");
  let menuList = document.querySelector(".menu-list");
  let isMenu =
    menuList.style.display === "none" || menuList.style.display === "";
  menuList.style.display = isMenu ? "flex" : "none";

  menuIcon.innerHTML = isMenu
    ? '<i class="fa-solid fa-xmark"></i>'
    : '<i class="fa-solid fa-bars"></i>';
}
