const factorialize = (n) => {
    if (n < 0) return -1
    if (n === 0 || n === 1) return 1
    return n * factorialize(n - 1)
}

const uniquePaths = (m, n) => {
    return factorialize(m + n - 2) / (factorialize(m - 1) * factorialize(n - 1))
}

console.log(uniquePaths(3, 7))
