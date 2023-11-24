// var menuElement = document.getElementById("ShowNavBar");
// menuElement.addEventListener("click", () => {
//   var menuItems = document.getElementById("NavItems");
//   if (menuItems.style.display !== "none") menuItems.style.display = "none";
//   else menuItems.style.display = "block";
// });

var menuItems = document.querySelectorAll(".nav");
menuItems.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  });
});
