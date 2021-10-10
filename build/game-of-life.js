console.log(tamaño);
let tablaTotal = Array(tamaño)
  .fill(0)
  .map(() => Array(tamaño).fill(0)); // filas y columnas INVESTIGAR

function checkVida(tabla) {
  const nuevoJuego = Array(tamaño)
    .fill(0)
    .map(() => Array(tamaño).fill(0));

  for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla[i].length; j++) {
      // eslint-disable-next-line no-use-before-define
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

  checkVida(nuevoJuego);
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

// js html
function crearTabla() {
  /* if (borrarTabla() === false)
    if (document.querySelector(".tablero") !== null)
      document.querySelector(".tablero").remove(); */
  const tamaño = +document.querySelector(".tamaño").value;
  console.log(tamaño);
  tablaTotal = Array(tamaño)
    .fill(0)
    .map(() => Array(tamaño).fill(0));
  const nuevoTablero = document.createElement("div");
  nuevoTablero.id = "tablero";
  nuevoTablero.className = "nuevoTablero";

  document.querySelector(".tablero").appendChild(nuevoTablero);

  for (let i = 0; i < tablaTotal.length; i++) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.id = `row${i}`;
    nuevoDiv.className = "row";
    nuevoTablero.appendChild(nuevoDiv);
  }
  for (let i = 0; i < tablaTotal.length; i++) {
    for (let j = 0; j < tablaTotal.length; j++) {
      const nuevaCelula = document.createElement("div");
      nuevaCelula.id = `${i}-${j}`;

      if (tablaTotal[i][j] === 0) {
        nuevaCelula.className = "col dead";
        nuevaCelula.onclick = nuevoColor;
      }
      if (tablaTotal[i][j] === 1) {
        nuevaCelula.className = "col alive";
        nuevaCelula.onclick = nuevoColor;
      }

      document.getElementById(`row${i}`).appendChild(nuevaCelula);
    }
  }
}

function nuevoColor() {
  const index = this.id.split("-");
  const row = index[0];
  const file = index[1];

  if (this.className === "col dead") {
    this.className = "col alive";
    tablaTotal[row][file] = 1;
  } else {
    this.className = "col dead";
    tablaTotal[row][file] = 0;
  }
}
