function capitalize(string) {
    return string = string[0].toUpperCase() + string.slice(1)
}

function reverseString(string) {
    return string.split('').reverse().join('')
}

const calculator = {
    add: function(a, b) {
        return a + b
    },
    substract: function(a, b) {
        return a - b
    },
    multiply: function(a, b) {
        return a * b
    },
    divide: function(a, b) {
        return a / b
    }
}

function caesarCipher(string, shift) {
    let res = []
    let reg = ""
    const dictionary = "abcdefghijklmnopqrstuvwxyz"
    const dictionaryUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for(let i = 0; i < string.length; ++i) {
        if (dictionary.includes(string[i])) {
            reg = dictionary
        }
        else if (dictionaryUpper.includes(string[i])) {
            reg = dictionaryUpper
        }
        else res.push(string[i])

        if (reg.includes(string[i])) {
            for(let j = 0; j < reg.length; ++j) {
                if (j + shift >= 0 && j + shift < reg.length && string[i] == reg[j]) {
                    res.push(reg[j + shift])
                } 
                else if (j + shift >= reg.length && string[i] == reg[j]) {
                    res.push(reg[(j + shift) % reg.length])
                }
                else if (j + shift < 0 && string[i] == reg[j]) {
                    res.push(reg[(j + shift) % reg.length])
                }
            }
        }
    }

    return res.join('')
}

function analyzeArray(arr) {
    return {
        average: arr.reduce((sum, cur) => sum + cur, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray }