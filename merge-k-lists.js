const mergeKLists = (lists) => {
    let arr = []
    for (const list of lists)
        for (const v of list)
            arr.push(v)
    arr.sort()
    return arr.reduceRight((next, value) => {
        {value, next}
    }, null)
}

const lists = [[1, 4, 5], [1, 3, 4], [2, 6]]
console.log(JSON.stringify(mergeKLists(lists), null, 2))