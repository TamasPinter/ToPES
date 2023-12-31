// DOM

const pickersEl = document.getElementById("pickers");

// create color picker
const colors = [
  "#000",
  "#e6261f",
  "#eb7532",
  "#FF33F6",
  "#a3e048",
  "#fff",
  "#49da9a",
  "#34bbe6",
  "#4355db",
  "#FAFCBE ",
  "#B9B9B9",
  "#FFD700",
];

colors.forEach((hexColor) => {
  const color = document.createElement("div");
  color.classList.add("color");
  color.setAttribute("data-color", hexColor);
  color.style.background = hexColor;
  if (hexColor === "#fff") {
    color.innerHTML = `<img src="images/eraser.webp" width=50>`;
    color.setAttribute(
      "style",
      "display: flex justify-content: center; align-items: center; background: #fff;"
    );
  }
  pickersEl.appendChild(color);
});
