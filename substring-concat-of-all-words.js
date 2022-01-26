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
    return res
}
//console.log(JSON.stringify(permutations(['foo', 'bar', 'baz'])))

const findSubstring = (s, words) => {
    const p = permutations(words), res = []
    for (let i = 0; i < p.length; i++) {
        const sub = p[i].join('')
        s.indexOf(sub) !== -1 && res.push(s.indexOf(sub))
    }
    return res
}
console.log(findSubstring('barfoofoobarthefoobarman', ['foo', 'bar', 'the']))
