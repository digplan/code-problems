const trappingRainWater = (height) => {
    let leftMax = 0, rightMax = 0, left = 0, right = height.length - 1, ans = 0
    while (left < right) {
        leftMax = Math.max(leftMax, height[left])
        rightMax = Math.max(rightMax, height[right])
        ans += (height[left] < height[right]) ? leftMax - height[left++] : rightMax - height[right--]
    }
    return ans
}

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))