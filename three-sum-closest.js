const threeSumClosest = (nums, target) => {
    nums.sort((a, b) => a - b)
    let res = Infinity
    for (i in nums) {
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if (~~(target - sum) < ~~(target - res)) res = sum
            if (sum < target) left++
            else right--
        }
    }
    return res
}
console.log(threeSumClosest([-1, 2, 1, -4], 1))
