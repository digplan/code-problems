const rotateArray = (nums, k) => {
    let res = []
    k = k % nums.length
    for (let i = 0; i < nums.length; i++) {
        const n = i < k ? i + nums.length : i
        res[n - k] = nums[i]
    }
    return res
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3))