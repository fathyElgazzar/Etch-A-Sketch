const squares = document.getElementById("squares");

// Number of Squares
let numOfSquares = 64;

let squareRow;
let square;
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

// Event Listener
squares.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("square")) {
    e.target.style.backgroundColor = `#458588`;
  }
});
