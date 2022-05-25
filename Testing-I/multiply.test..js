const { test, expect, describe } = require("@jest/globals");
const multiply = require("./multiply");
describe("test multiply function with numbers", function () {
  test("should work on all positive integers", function () {
    expect(multiply(2, 2)).toBe(4);
    expect(multiply(2, 0)).toBe(0);
  });
  test("should work on all negative integers", function () {
    expect(multiply(-2, -2)).toBe(4);
    expect(multiply(-2, 0)).toBe(-0);
  });
});
describe("test multiply function with strings", function () {
  test("should work on strings", function () {
    expect(multiply("a", "b")).toBe(undefined);
  });
});
