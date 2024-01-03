const squares = document.getElementById("squares");
// const pixels = document.getElementById("btn-pixel");
const pixelSize = document.querySelector("#pixel-size");
const colorPicker = document.querySelector(".color-picker");
const pixelSizeValue = document.querySelector(".pixel-size-value");
let isDrawing = false;
pixelSizeValue.textContent = `${pixelSize.value} px`;
// Number of Squares
let numOfSquares = pixelSize.value;
let color = colorPicker.value;
let squareRow;
let square;
// Draw squares
function drawSquares() {
  for (let i = 1; i <= numOfSquares; i++) {
    squareRow = document.createElement("div");
    squareRow.classList.add("squareRow");
    squares.appendChild(squareRow);

    for (let i = 1; i <= numOfSquares; i++) {
      square = document.createElement("div");
      squareRow.appendChild(square);
      square.classList.add("square");
    }
  }
}
drawSquares();

// Event Listener
document.addEventListener("mousedown", () => {
  isDrawing = true;
});
document.addEventListener("mouseup", () => {
  isDrawing = false;
});

squares.addEventListener("mouseover", (e) => {
  if (isDrawing && e.target.classList.contains("square")) {
    e.target.style.backgroundColor = color;
  }
});

// An older prompt way but it's not clean I think and I don't prefer it
// pixels.addEventListener("click", () => {
//   // Get Number of squares
//   const Num = Number(prompt("Type the number of squares 'max 100' "));
//   if (Num > 100) {
//     alert("Please type number between 1 and 100");
//   } else {
//     numOfSquares = Num;
//     squares.innerHTML = "";
//     drawSquares();
//   }
// });

colorPicker.addEventListener("change", function (e) {
  color = e.target.value;
});

pixelSize.addEventListener("input", function (e) {
  pixelSizeValue.textContent = `${e.target.value} px`;
  numOfSquares = e.target.value;
  squares.innerHTML = "";
  drawSquares();
});
