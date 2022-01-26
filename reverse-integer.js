const reverseInteger = (x) => {
    let res = 0, max = Math.pow(2, 31) - 1
    while (x) {
        if(res > max || res < -max) return 0
        res = res * 10 + x % 10
        x = ~~(x/10)
    }
    return res;
}
console.log(reverseInteger(1234567))