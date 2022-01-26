const generateParenthesis = (n) => {
    const result = []
    const generate = (left, right, str) => {
        if (left === n && right === n)
            result.push(str)
        if (left < n)
            generate(left + 1, right, str + '(')
        if (right < left)
            generate(left, right + 1, str + ')')
    }
    generate(0, 0, '')
    return result
}

console.log(generateParenthesis(6))