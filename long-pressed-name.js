const longPressedName = (name, typed) => {
    let i = 0
    for (let j = 0; j < typed.length; j++) {
        if (name[i] === typed[j]) i++
    }
    return i === name.length;
}
console.log(longPressedName('alex', 'aaleex')) // true
console.log(longPressedName('saeed', 'ssaaedd')) // false