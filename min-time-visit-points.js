var minTimeToVisitAllPoints = function (points) {
    let ret = 0
    for (let i = 1; i < points.length; i++) {
        const last = points[i - 1]
        const curr = points[i]
        const d1 = Math.abs(last[0] - curr[0])
        const d2 = Math.abs(last[1] - curr[1])
        ret += Math.min(d1, d2) + ((Math.max(d1, d2) - Math.min(d1, d2)))
    }
    return ret
}
console.log(minTimeToVisitAllPoints([[1, 1], [3, 4], [-1, 0]])) // 7