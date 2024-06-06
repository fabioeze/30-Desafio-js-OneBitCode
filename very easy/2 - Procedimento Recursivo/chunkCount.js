function recursiveChunks(num) {
    if (num === 0) {
        return ""
    }

    if (num === 1) {
        return "chunk"
    } else {
        return "chunk-" + recursiveChunks(num - 1)
    }
}

console.log(recursiveChunks(2))


function recursiveChunksRefatorado(num) {
    if (num === 0) return ""
    return num === 1 ? "chunk" : "chunk-" + recursiveChunksRefatorado(num - 1)
}

console.log(recursiveChunksRefatorado(5))