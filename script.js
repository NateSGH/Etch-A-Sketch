const gridSpace = 960; // grid space - 960px wide and 960px in height
const squareBorderWidth = 1; // grid square border width - 1px
let squaresPerSide = 16; // default - 16x16 grid of squares
// let state = "mouseover"; // default state - mouseover. TODO: mousedown?

const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".reset");

const grid = [];

let squares = 0;

function coloringSquares() {
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (!square.classList.contains("colored")) {
        square.classList.add("colored");

        randomColor = generateRandomColor();
        console.log(randomColor);
        square.style.backgroundColor = `#${randomColor}`;
      }
    });
  });
}

function createGrid() {
  const lengthSide = gridSpace / squaresPerSide - 2 * squareBorderWidth;
  console.log(lengthSide);

  for (let i = 0; i < Math.pow(squaresPerSide, 2); i++) {
    grid[i] = document.createElement("div");
    grid[i].style.height = `${lengthSide}px`;
    grid[i].style.width = `${lengthSide}px`;
    grid[i].style.border = `${squareBorderWidth}px solid black`;

    gridContainer.appendChild(grid[i]);
    grid[i].classList.add("square");
  }
  squares = document.querySelectorAll(".square");
  coloringSquares();
}

function generateRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

resetBtn.addEventListener("click", () => {
  const squaresC = document.querySelectorAll(".square");
  let userInput = prompt(
    "How many squares per side to make the new grid? (5-100)"
  );
  if (userInput < 5 || userInput > 100) {
    alert("Number of squares per side should be between 5 and 100. Try again");
  } else {
    squaresPerSide = userInput;
    squaresC.forEach((square) => {
      square.remove();
    });
    createGrid();
    squares = document.querySelectorAll(".square");
    console.log(squares);
    coloringSquares();
  }

  squaresC.forEach((square) => {
    square.classList.remove("colored");
  });
});

createGrid();
