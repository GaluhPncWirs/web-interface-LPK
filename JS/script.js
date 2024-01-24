const modeHp = document.querySelector("#mode-hp");
const navGeser = document.querySelector("nav ul");
const blur_main = document.querySelector("main");
modeHp.addEventListener("click", function () {
  modeHp.classList.toggle("active");
  navGeser.classList.toggle("geser");
  // blur_main.classList.toggle("blur");
});

// window.addEventListener("resize", () => {
//   if (window.innerWidth >= 640) {
//     blur_main.classList.remove("blur");
//   } else if (window.innerWidth === 650) {
//     blur_main.classList.add("blur");
//   }
// });

const mode = document.querySelector("#mode");
const darkMode = document.querySelector(".dark-mode");
const html = document.querySelector("html");
const svg_1 = document.querySelector(".svg-color-1 path");
const svg_2 = document.querySelector(".svg-color-2 path");
const svg_3 = document.querySelector(".svg-color-3 path");

const isDarkMode = localStorage.getItem("dark");

if (isDarkMode === "true") {
  svg_1.setAttribute("fill", "#334155");
  svg_2.setAttribute("fill", "#475569");
  svg_3.setAttribute("fill", "#334155");
  mode.checked = true;
}

mode.addEventListener("click", () => {
  if (mode.checked) {
    darkMode.textContent = "dark_mode";
    html.classList.add("dark");
    localStorage.theme = "dark";
    svg_1.setAttribute("fill", "#334155");
    svg_2.setAttribute("fill", "#475569");
    svg_3.setAttribute("fill", "#334155");
    localStorage.setItem("dark", "true");
  } else {
    darkMode.textContent = "light_mode";
    html.classList.remove("dark");
    localStorage.theme = "light";
    svg_1.setAttribute("fill", "#fb7185");
    svg_2.setAttribute("fill", "#0891b2");
    svg_3.setAttribute("fill", "#93c5fd");
    localStorage.setItem("dark", "false");
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
