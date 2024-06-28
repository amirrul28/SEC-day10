const menuIcon = document.querySelector("#menuIcon");
const sidebar = document.querySelector("#sidebar");
const close = document.querySelector("#closeIcon");
const sidebarBackground = document.querySelector("#sidebarBackground");

menuIcon.addEventListener("click", function () {
  console.log("clicked");
  //   sidebar.style.display = "block";
  sidebar.style.right = 0;
  sidebarBackground.style.visibility = "visible";
  sidebarBackground.style.opacity = "100";
});
closeIcon.addEventListener("click", function () {
  //   sidebar.style.display = "none";
  sidebar.style.right = "-200px";
  sidebarBackground.style.visibility = "hidden";
  sidebarBackground.style.opacity = "0";
});
sidebarBackground.addEventListener("click", function () {
  sidebar.style.right = "-200px";
  sidebarBackground.style.visibility = "hidden";
  sidebarBackground.style.opacity = "0";
});
