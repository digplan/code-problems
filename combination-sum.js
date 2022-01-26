const combinationSum = (candidates, target) => {
    const res = []
    const helper = (comb, target, i) => {
        if (target === 0) return res.push(comb)
        if (target < 0) return
        for (let j = i; j < candidates.length; j++)
            helper(comb.concat(candidates[j]), target - candidates[j], j)
    }
    helper([], target, 0)
    return JSON.stringify(res)
}

console.log(combinationSum([2, 3, 6, 7], 7))
