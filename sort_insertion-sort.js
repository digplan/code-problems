function InsertionSort(arr, k) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1])
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]
        }
    }
    return arr
}
console.log(InsertionSort([10, 12, 8, 4, 5, 6, 7, 8, 9, 10]))