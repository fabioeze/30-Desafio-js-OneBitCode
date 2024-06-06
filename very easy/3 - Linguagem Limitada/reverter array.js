// minha solução
function reverse(...arr) {
    const arrayRevertido = []

    for (let i = 0; i < arr.length; i++) {
        arrayRevertido.unshift(arr[i]);
    }

    return arrayRevertido
}

console.log(reverse('f', true, 3, 'k', 2));

// Solução da onebitcode
function imutableReverse(...arr) {
    const reversedArray = []

    for (let i = 0; i < arr.length; i++) {
        reversedArray[i] = arr[arr.length - i - 1]
    }

    return reversedArray
}

console.log(imutableReverse('b', false, 1, 'h', 9, true, false))