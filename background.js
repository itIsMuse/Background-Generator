var backgrounds = document.querySelector("body");

var color_1 = document.getElementById("color-1");

var color_2 = document.getElementById("color-2");

var h3 = document.querySelector("h3");

function changeColor() {
  backgrounds.style.background =
    "linear-gradient(to right, " + color_1.value + ", " + color_2.value;
  (")");

  h3.textContent = backgrounds.style.background;
}

color_1.addEventListener("input", changeColor);

color_2.addEventListener("input", changeColor);
