const dimensionTabla = 5;
const tablaTotal = Array(dimensionTabla)
  .fill(0)
  .map(() => Array(dimensionTabla).fill(0)); // filas y columnas INVESTIGAR

tablaTotal[1][0] = 1;
tablaTotal[1][1] = 1;

// primero creamos ARRAY
// segundo, leemos todas la posiciones del array
// tercero, miramos cuantos vecinos tiene el array mirando en cada posicion sus 8 posibles vecinos
// (si sus posiciones tienen un 1, el contador sube)
// cuatro una vez recogidos, cuantos vecinos estan alrededor de cada posicion del array,

function checkVida(tabla) {
  for (let i = 0; i < tabla.length; i++) {
    for (let j = 0; j < tabla[i].length; j++) {
      // eslint-disable-next-line no-use-before-define
      const vecinos = checkVecinos(tabla, i, j);
      if (vecinos < 2 || vecinos > 3) {
        tabla[i][j] = 0;
      }
      if (vecinos === 2 || vecinos === 3) {
        tabla[i[j]] = 1;
      }
    }
  }
}
function checkVecinos(juego, x, y) {
  let contador = 0;
  // VERTICAL
  if (juego[x - 1 >= 0 && y >= 0] === 1) contador++;

  if (juego[x + 1 >= 0 && y >= 0] === 1) contador++;

  // HORIZONTAL
  if (juego[x >= 0 && y - 1 >= 0] === 1) contador++;

  if (juego[x >= 0 && y + 1 >= 0] === 1) contador++;

  // DIAGONALes  ARRIBA
  if (juego[x - 1 >= 0 && y - 1 >= 0] === 1) contador++;

  if (juego[x - 1 >= 0 && y + 1 >= 0] === 1) contador++;

  // DIAGONALES ABAJO
  if (juego[x + 1 >= 0 && y - 1 >= 0] === 1) contador++;

  if (juego[x + 1 >= 0 && y + 1 >= 0] === 1) contador++;

  return contador;
}

console.table(checkVida(tablaTotal));
