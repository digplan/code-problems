const permutations = (nums) => {
    const res = []
    const backtrack = (arr = []) => {
        if (arr.length === nums.length) return res.push(arr)
        nums.forEach(element => {
            if (!arr.includes(element))
                backtrack(arr.concat(element))
        })
    }
    backtrack()
    return JSON.stringify(res)
}

console.log(permutations(['word', 'good', 'best', 'good']))
