const binary_search = (arr, v) => {
    let mid = ~~(arr.length / 2), last
    while (last !== mid) {
        if (arr[mid] == v) return mid
        last = mid
        mid = (arr[mid] > v) ? ~~(mid / 2) : ~~((mid + arr.length) / 2)
    }
    return -1
}

const ret = binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 10)
console.log(ret)