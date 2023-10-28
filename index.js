// find DOM elements
const canvas = document.getElementById("canvas");
const gridInput = document.getElementById("size");
const gridSizeValue = document.getElementById("size-text");
const eraseBtn = document.getElementById("erase");
const colorEls = document.querySelectorAll(".color");

// determine grid size
function setHeight() {
  const width = canvas.getBoundingClientRect().width;
  const height = width;
  canvas.style.height = height + "px";
}

// set grid size

function appendSquares(size) {
  canvas.innerText = "";
  const squareWidth = 100 / size + "%";
  const squareHeight = squareWidth;
  for (let i = 0; i < size ** 2; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareWidth;
    square.style.height = squareHeight;
    square.style.background = "white";
    canvas.appendChild(square);
  }
  listeners();
}

// add event listeners

function listeners() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", (event) => {
      if (drawing) {
        event.target.style.background = activeColor;
      }
    });
  });
}

// create initial size

let gridSize = gridInput.value;
setHeight();
appendSquares(gridSize);
colorEls[0].classList.add("active-color");

// change drawing variable

let drawing = false;
window.addEventListener("mousedown", () => {
  drawing = true;
});
window.addEventListener("mouseup", () => {
  drawing = false;
});

// resie window change
window.addEventListener("resize", (event) => {
  setHeight();
});

// listen for grid changes

gridInput.oninput = (event) => {
  gridSize = event.target.value;
  gridSizeValue.textContent = `${gridSize} x ${gridSize}`;
  appendSquares(gridSize);
};

// listen for colour changes

let activeColor = "#000";
let prevNode = colorEls[0];

colorEls.forEach((colorEl) => {
  colorEl.onclick = function () {
    activeColor = this.getAttribute("data-color");
    colorEl.classList.add("active-color");
    prevNode.classList.remove("active-color");
    prevNode = colorEl;
  };
});

// listen for erase button
eraseBtn.addEventListener("click", () => {
  appendSquares(gridSize);
});
