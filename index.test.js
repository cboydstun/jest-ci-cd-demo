const { calculator } = require("./index");

describe("Calculator", () => {
    test("should add two numbers correctly", () => {
        expect(calculator.add(2, 3)).toBe(5);
    })

    test("should subtract two numbers correctly", () => {
        expect(calculator.subtract(2, 3)).toBe(-1);
    })

    test("should multiply two numbers correctly", () => {
        expect(calculator.multiply(2, 3)).toBe(6);
    })

    test("should divide two numbers correctly", () => {
        expect(calculator.divide(6, 3)).toBe(2);
    })
})