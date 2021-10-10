let size = 0;
let tablaTotal = Array(size)
  .fill(0)
  .map(() => Array(size).fill(0));

function borrarTabla() {
  if (document.getElementById("tablero") !== undefined) {
    return false;
  }
  return true;
}
function crearTabla() {
  const tamaño = +document.querySelector(".tamaño").value;
  size = tamaño;
  if (borrarTabla() === false)
    if (document.getElementById("tablero") !== null)
      document.getElementById("tablero").remove();
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
  const filas = index[0];
  const columnas = index[1];

  if (this.className === "col dead") {
    this.className = "col alive";
    tablaTotal[filas][columnas] = 1;
  } else {
    this.className = "col dead";
    tablaTotal[filas][columnas] = 0;
  }
}

function pintarCelulas(existencia, vecinos) {
  if (existencia === 1) {
    if (vecinos < 2) {
      return 0;
    }
    if (vecinos > 3) {
      return 0;
    }
    if (vecinos === 2 || vecinos === 3) {
      return 1;
    }
  }
  if (existencia === 0) {
    if (vecinos === 3) {
      return 1;
    }
    return 0;
  }
}

function juegoVida(tabla, tamañoTabla) {
  const nuevoJuego = Array(tamañoTabla)
    .fill(0)
    .map(() => Array(tamañoTabla).fill(0));

  for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla[i].length; j++) {
      let contador = 0;
      // VERTICAL

      if (tablaTotal[i - 1] !== undefined) {
        if (tablaTotal[i - 1][j] === 1) contador++;
      }
      if (tablaTotal[i + 1] !== undefined) {
        if (tablaTotal[i + 1][j] === 1) contador++;
      }
      // HORIZONTAL
      if (tablaTotal[i] !== undefined) {
        if (tablaTotal[i][j - 1] === 1) contador++;
      }
      if (tablaTotal[i] !== undefined) {
        if (tablaTotal[i][j + 1] === 1) contador++;
      }
      // DIAGONALes  ARRIBA
      if (tablaTotal[i - 1] !== undefined) {
        if (tablaTotal[i - 1][j - 1] === 1) contador++;
      }
      if (tablaTotal[i - 1] !== undefined) {
        if (tablaTotal[i - 1][j + 1] === 1) contador++;
      }
      // DIAGONALES ABAJO
      if (tablaTotal[i + 1] !== undefined) {
        if (tablaTotal[i + 1][j - 1] === 1) contador++;
      }
      if (tablaTotal[i + 1] !== undefined) {
        if (tablaTotal[i + 1][j + 1] === 1) contador++;
      }
      nuevoJuego[i][j] = pintarCelulas(tablaTotal[i][j], contador);
      // document.getElementById(`${i}-${j}`).style.backgroundColor = "green";
      if (nuevoJuego[i][j] === 0) {
        document.getElementById(`${i}-${j}`).className = "col dead";
      }
      if (nuevoJuego[i][j] === 1) {
        document.getElementById(`${i}-${j}`).className = "col alive";
      }
    }
  }
  tablaTotal = nuevoJuego;
  return tablaTotal;
}
// const Itinerar = null;

function gameLoop() {
  setInterval(() => {
    tablaTotal = juegoVida(tablaTotal, size);
  }, 1500);
}
