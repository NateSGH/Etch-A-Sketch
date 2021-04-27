const gridSpace = 960; // grid space - 960px wide and 960px in height
const squareBorderWidth = 1; // grid square border width - 1px
let squaresPerSide = 16; // default - 16x16 grid of squares
// let state = "mouseover"; // default state - mouseover. TODO: mousedown?
let color = "black"; //random

const gridContainer = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".reset");
const clearBtn = document.querySelector(".clear");
const colorBtn = document.querySelector(".color");

const grid = [];

let squares = 0;

function coloringSquares() {
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      if (!square.classList.contains("colored")) {
        square.classList.add("colored");
      }
      if (color === "random") {
        randomColor = generateRandomColor();
        console.log(randomColor);
        square.style.backgroundColor = `#${randomColor}`;
      } else {
        if (square.style.backgroundColor === "") {
          square.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        } else {
          let opacity = square.style.backgroundColor;
          opacity = parseFloat(opacity.slice(-4, -1));
          if (opacity < 1) {
            opacity = opacity + 0.1;
            console.log(opacity);
            square.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
          } else if (opacity >= 1) {
            square.style.backgroundColor = `rgba(0, 0, 0, 1)`;
          }
        }
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
  let userInput = prompt(
    "How many squares per side to make the new grid? (5-100)"
  );
  if (userInput < 5 || userInput > 100) {
    alert("Number of squares per side should be between 5 and 100. Try again");
  } else {
    squaresPerSide = userInput;
    createNewGrid();
  }
  console.log("test");
  clearGrid();
});

function clearGrid() {
  const squaresC = document.querySelectorAll(".square");
  squaresC.forEach((square) => {
    square.classList.remove("colored");
    square.style.backgroundColor = "";
  });
}

function createNewGrid() {
  const squaresC = document.querySelectorAll(".square");
  squaresC.forEach((square) => {
    square.remove();
  });
  createGrid();
  squares = document.querySelectorAll(".square");
  console.log(squares);
}

colorBtn.addEventListener("click", () => {
  if (color === "random") {
    color = "black";
  } else {
    color = "random";
  }
  clearGrid();
});

clearBtn.addEventListener("click", () => {
  clearGrid();
});

createGrid();
