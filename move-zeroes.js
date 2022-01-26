const moveZeroes = (arr) => {
    let p1 = 0, p2 = 0
    while (p2 < arr.length) {
        if (arr[p2] !== 0)
            arr[p1] = arr[p2], p1++
        p2++
    }
    while (p1 < arr.length)
        arr[p1++] = 0
    return arr
}
console.log(moveZeroes([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))