import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from ".";

test('capitalize', () => {
    expect(capitalize("russia")).toBe("Russia")
})

test('reverse string', () => {
    expect(reverseString("Russia")).toBe("aissuR")
})

test('calculcator', () => {
    expect(calculator.add(2, 2)).toBe(4),
    expect(calculator.substract(5, 2)).toBe(3),
    expect(calculator.multiply(3, 3)).toBe(9),
    expect(calculator.divide(10, 2)).toBe(5)
})

test('Caesar cipher', () => {
    expect(caesarCipher("hello", 3)).toBe("khoor"),
    expect(caesarCipher("xyz", 3)).toBe("abc"),
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr"),
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})

test('analyze array', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 })
})