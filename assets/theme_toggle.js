console.log("theme toggle");

// theme-toggle.js
function toggleTheme() {
  var currentTheme = document.documentElement.getAttribute("data-theme");
  var targetTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", targetTheme);
  localStorage.setItem("theme", targetTheme);
}

// theme-toggle.js
var preferredTheme = localStorage.getItem("theme");
if (preferredTheme !== null) {
  document.documentElement.setAttribute("data-theme", preferredTheme);
}
