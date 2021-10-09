const dimensionTabla = 5;
const tablaTotal = Array(dimensionTabla)
  .fill(0)
  .map(() => Array(dimensionTabla).fill(0)); // filas y columnas INVESTIGAR

tablaTotal[1][2] = 1;
tablaTotal[2][2] = 1;
tablaTotal[3][2] = 1;

// primero creamos ARRAY
// segundo, leemos todas la posiciones del array
// tercero, miramos cuantos vecinos tiene el array mirando en cada posicion sus 8 posibles vecinos
// (si sus posiciones tienen un 1, el contador sube)
// cuatro una vez recogidos, cuantos vecinos estan alrededor de cada posicion del array,

function checkVida(tabla, count) {
  const nuevoJuego = Array(dimensionTabla)
    .fill(0)
    .map(() => Array(dimensionTabla).fill(0));
  if (count === 0) {
    return;
  }
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
  console.log(nuevoJuego);
  checkVida(nuevoJuego, count - 1);
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
console.table(tablaTotal);
checkVida(tablaTotal, 2);
