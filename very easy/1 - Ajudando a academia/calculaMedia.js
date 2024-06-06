/*Fiz dessa forma*/
function notas(numeros) {
    let media = 0;
    numeros.forEach(numero => {
        media = media + numero; /*podia ser media += numero*/
    });

    return media/numeros.length;
}
console.log(notas([1,5,3,76,2]));

/*Resolução Rápida da OneBitCode*/

function average1(numbers) {
    let sum = 0
  
    numbers.forEach(number => {
      sum += number
    })
  
    const avg = sum / numbers.length
  
    return avg
  }

  console.log(average1([1,5,3,76,2]));

/*refatorando*/
function average2(...numbers) {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    const avg = sum / numbers.length
    return avg
}

console.log(average2(1,5,3,76,2));