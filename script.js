const gridSpace = 960; // grid space - 960px wide and 960px in height
const squareBorderWidth = 1; // grid square border width - 1px
let squaresPerSide = 16; // default - 16x16 grid of squares

const gridContainer = document.querySelector(".grid-container");

const grid = [];

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
}

createGrid();

const squares = document.querySelectorAll(".square");

squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    if (!square.classList.contains("colored")) {
      square.classList.add("colored");
    }
  });
});
