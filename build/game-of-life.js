const boardHTML = document.querySelector(".board");
const size = document.querySelector("#size");
const row = document.querySelectorAll(".board__rows");

function createBoard(boardSize) {
  const tablaTotal = Array(boardSize)
    .fill(0)
    .map(() => Array(boardSize).fill(0));
  return tablaTotal;
}

function createCells() {
  const boardDemo = document.createElement("div");
  boardDemo.className = "board__boardDemo";
  for (let i = 0; i < tablaTotal.length; i++) {
    const newDivRows = document.createElement("div");
    newDivRows.className = "board__rows";
    boardHTML.appendChild(boardDemo);
    boardDemo.appendChild(newDivRows);
  }
  for (let i = 0; i < tablaTotal.length; i++) {
    for (let j = 0; j < tablaTotal[i].length; j++) {
      const newDivCells = document.createElement("div");
      newDivCells.className = "board__cell";
      newDivCells.id = `${i}-${j}`;
      newDivCells.onclick = changeCells;
      row[i].appendChild(newDivCells);
    }
  }
}

function changeCells() {
  const indexTable = this.id.split("-");
  const row = indexTable[0];
  const file = indexTab[1];

  if (this.style.background === "black") {
    this.style.background = "hotpink";
    tablaTotal[row][file] = 1;
  } else {
    this.style.background = "black";
    tablaTotal[row][file] = 0;
  }
}

function startCreation() {
  if (size < 5 || size > 20 || size === NaN) {
    size.value = "Valor entre 5 y 20 porfavor";
    size = 0;
  }
  const tablaTotal = createBoard(size);
  createCells(size);
}

tablaTotal[1][2] = 1;
tablaTotal[2][2] = 1;
tablaTotal[3][2] = 1;

function play() {}
function stop() {}

function checkVida(tabla) {
  const nuevoJuego = createBoard(size);

  for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla[i].length; j++) {
      const vecinos = checkVecinos(tabla, i, j);
      if (tabla[i][j] === 1) {
        if (vecinos < 2) {
          nuevoJuego[i][j] = 0;
        } else if (vecinos > 3) {
          nuevoJuego[i][j] = 0;
        } else if (vecinos === 2 || vecinos === 3) {
          nuevoJuego[i][j] = 1;
        }
      }
      if (tabla[i][j] === 0) {
        if (vecinos === 3) {
          nuevoJuego[i][j] = 1;
        } else {
          nuevoJuego[i][j] = 0;
        }
      }
    }
  }

  return nuevoJuego;
}

function checkVecinos(juego, x, y) {
  let contador = 0;
  // VERTICAL

  if (juego[x - 1] !== undefined) {
    if (juego[x - 1][y] === 1) contador++;
  }
  if (juego[x + 1] !== undefined) {
    if (juego[x + 1][y] === 1) contador++;
  }
  // HORIZONTAL
  if (juego[x] !== undefined) {
    if (juego[x][y - 1] === 1) contador++;
  }
  if (juego[x] !== undefined) {
    if (juego[x][y + 1] === 1) contador++;
  }
  // DIAGONALes  ARRIBA
  if (juego[x - 1] !== undefined) {
    if (juego[x - 1][y - 1] === 1) contador++;
  }
  if (juego[x - 1] !== undefined) {
    if (juego[x - 1][y + 1] === 1) contador++;
  }
  // DIAGONALES ABAJO
  if (juego[x + 1] !== undefined) {
    if (juego[x + 1][y - 1] === 1) contador++;
  }
  if (juego[x + 1] !== undefined) {
    if (juego[x + 1][y + 1] === 1) contador++;
  }
  return contador;
}

module.exports = {
  checkVida,
  checkVecinos,
};
