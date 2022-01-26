const sortFlag = (arr) => {
    let start = 0, mid = 0, end = arr.length - 1

    while (mid <= end) {
        if (arr[mid] < 1) {
            [arr[start], arr[mid]] = [arr[mid], arr[start]]
            start++, mid++
        } else if (arr[mid] > 1) {
            [arr[mid], arr[end]] = [arr[end], arr[mid]]
            end--
        } else {
            mid++
        }
    }
    return arr
}
console.log(sortFlag([0,2,1,2,1,0,2]))