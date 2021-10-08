const dimensionTabla = 5;
const tabla = Array(dimensionTabla)
  .fill(0)
  .map(() => Array(dimensionTabla).fill(0)); // filas y columnas INVESTIGAR

tabla[1][0] = 1;
tabla[1][1] = 1;

for (let i = 0; i < dimensionTabla; i++) {
  for (let j = 0; j < dimensionTabla; j++) {
    console.log(i, j);
    let contador = 0;
    if (i === 0 && j === 0) {
      if (tabla[0][1] === 1) contador++;
      if (tabla[1][0] === 1) contador++;
      if (tabla[1][1] === 1) contador++;
      console.log(`c${contador}`);
    } else if (i === 0 && j === tabla[j].length - 1) {
      if (tabla[0][j.length - 2] === 1) contador++;
      if (tabla[1][j.length - 2] === 1) contador++;
      if (tabla[1][j.length - 1] === 1) contador++;
      console.log(`c${contador}`);
    } else if (i === tabla.length - 1 && j === 0) {
      if (tabla[tabla.length - 2][0] === 1) contador++;
      if (tabla[tabla.length - 2][1] === 1) contador++;
      if (tabla[tabla.length - 1][1] === 1) contador++;
      console.log(`c${contador}`);
    } else if (i === tabla.length - 1 && j === tabla[j].length - 1) {
      if (tabla[tabla.length - 2][j.length - 1] === 1) contador++;
      if (tabla[tabla.length - 2][j.length - 2] === 1) contador++;
      if (tabla[tabla.length - 1][j.length - 2] === 1) contador++;
      console.log(`c${contador}`);
    }
  }
}

console.table(tabla);
