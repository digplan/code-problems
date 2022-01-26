const add = function (a, b) {
    return (b == 0) ? a : add(a ^ b, (a & b) << 1)
}

console.log(add(1200, 5601));