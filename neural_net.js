relu = (x) => Math.max(0, x)
sigmoid = (x) => 1/(1+Math.exp(-x))

console.log(sigmoid(2))