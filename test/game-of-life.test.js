const { checkVida, checkVecinos } = require("../build/game-of-life");

describe("When gave checkVida function", () => {
  describe("it recieves an array with 3 position, 2 of them neighbors", () => {
    test("it should return new array with the line in horizotal", () => {
      // arrange
      const dimensionTabla = 5;
      const tablaPrueba = Array(dimensionTabla)
        .fill(0)
        .map(() => Array(dimensionTabla).fill(0));

      tablaPrueba[2][2] = 1;
      tablaPrueba[1][2] = 1;
      tablaPrueba[3][2] = 1;

      const nuevaTabla = Array(dimensionTabla)
        .fill(0)
        .map(() => Array(dimensionTabla).fill(0));
      nuevaTabla[2][2] = 1;
      nuevaTabla[2][1] = 1;
      nuevaTabla[2][3] = 1;
      const expected = nuevaTabla;
      // act

      const result = checkVida(tablaPrueba);

      // assert

      expect(result).toEqual(expected);
    });
  });

  describe("it recieves an array with 2 position, no neighbor", () => {
    test("it should return and array full of zero", () => {
      // arrange
      const dimensionTabla = 5;
      const tablaPrueba = Array(dimensionTabla)
        .fill(0)
        .map(() => Array(dimensionTabla).fill(0));

      tablaPrueba[0][2] = 1;
      tablaPrueba[1][3] = 1;

      const nuevaTabla = Array(dimensionTabla)
        .fill(0)
        .map(() => Array(dimensionTabla).fill(0));

      const expected = nuevaTabla;
      // act

      const result = checkVida(tablaPrueba);

      // assert

      expect(result).toEqual(expected);
    });
  });
  describe("it recieves an array with 3 neighbor", () => {
    test("it should return and array with 4 alive", () => {
      // arrange
      const dimensionTabla = 5;
      const tablaPrueba = Array(dimensionTabla)
        .fill(0)
        .map(() => Array(dimensionTabla).fill(0));

      tablaPrueba[0][0] = 1;
      tablaPrueba[1][0] = 1;
      tablaPrueba[1][1] = 1;

      const nuevaTabla = Array(dimensionTabla)
        .fill(0)
        .map(() => Array(dimensionTabla).fill(0));

      nuevaTabla[0][0] = 1;
      nuevaTabla[1][0] = 1;
      nuevaTabla[1][1] = 1;
      nuevaTabla[0][1] = 1;

      const expected = nuevaTabla;
      // act

      const result = checkVida(tablaPrueba);

      // assert

      expect(result).toEqual(expected);
    });
  });
});

describe("When gave checkVecinos function", () => {
  describe("it recieves and array and a position of the array in the middle", () => {
    test("it should return contador=2", () => {
      const dimensionTabla = 5;
      const tablaPrueba = Array(dimensionTabla)
        .fill(0)
        .map(() => Array(dimensionTabla).fill(0));

      tablaPrueba[1][0] = 1;
      tablaPrueba[1][1] = 1;
      const expected = 2;

      const result = checkVecinos(tablaPrueba, 0, 0);

      expect(result).toBe(expected);
    });
  });

  describe("it recieves and array and a position of the array in a corner", () => {
    test("it should return contador=1", () => {
      const dimensionTabla = 5;
      const tablaPrueba = Array(dimensionTabla)
        .fill(0)
        .map(() => Array(dimensionTabla).fill(0));

      tablaPrueba[0][1] = 0;
      tablaPrueba[1][1] = 1;
      tablaPrueba[1][0] = 0;
      const expected = 1;

      const result = checkVecinos(tablaPrueba, 0, 0);

      expect(result).toBe(expected);
    });
  });
});
