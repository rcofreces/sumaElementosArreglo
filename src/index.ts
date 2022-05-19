let dimensiónArreglo: number = Number(
  prompt("Ingrese la dimensión del arreglo")
);
let arreglo: number[] = new Array(dimensiónArreglo);
let índice: number;
let resultado: number = 0;

for (índice = 0; índice < dimensiónArreglo; índice++) {
  arreglo[índice] = Number(
    prompt(`Ingrese el número que va a ir en la posición ${índice}`)
  );
  resultado += arreglo[índice];
}

for (índice = 0; índice < dimensiónArreglo; índice++) {
  console.log(`El número en la posición ${índice} es: ${arreglo[índice]}`);
}

console.log(`La suma del arreglo es: ${resultado}`);
