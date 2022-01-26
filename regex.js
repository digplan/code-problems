const rx = (s, p) => {
    let si = 0
    for(let i=0; i<p.length; i++) {
        if(p[i] === '*') {
            let la = p[i+1]
            while(s[si] && (s[si] !== la))
              si++
        } else if(p[i] === '.' || p[i] === s[si]) {
            si++
        } else {
            return false
        }
    }
    if(si < s.length) return false
    return true
}
console.log(rx('aab', 'c*a*b'))

