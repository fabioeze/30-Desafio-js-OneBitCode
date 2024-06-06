//minha solução
function calculaQuadratica(num) {
    let resultado = '';
    let numString = num.toString();

    for (let i = 0; i < numString.length; i++) {
        let digito = Number(numString[i]);

        let quadrado = digito * digito

        resultado = resultado + quadrado.toString();
    }

    return Number(resultado)
}


console.log(calculaQuadratica(2324));

//Solução rapida onebitcode

function squareDigits(num) {
    const str = num.toString()
    let result = ""

    for (let i = 0; i < str.length; i++) {
        result += Math.pow(+str[i], 2).toString()
    }

    return Number(result)
}

// refatorado (utilizando arrays)

function squareDigits(num) {
    const digitsString = num.toString()
    const digitsArray = digitsString.split('')
    const squaredArray = digitsArray.map(number => number ** 2)
    const squaredString = squaredArray.join('')
    return Number(squaredString)
}

// diminuindo ainda mais o código

function squareDigits(num) {
    const digitsArray = num.toString().split('')
    return Number(digitsArray.map(number => number ** 2).join(''))
}