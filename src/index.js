import "./index.scss";

// SIDEBAR

export function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

export function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
