const tamaño = 5;
const tablaTotal = Array(tamaño)
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
console.log(checkVida(tablaTotal));
