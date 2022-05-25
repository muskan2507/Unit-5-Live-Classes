const { test, expect, describe } = require("@jest/globals");
const sum = require("./index");
describe("test sum function with numbers", function () {
  test("should work on all positive integers", function () {
    expect(sum(2, 2)).toBe(4);
    expect(sum(2, 0)).toBe(2);
  });
  test("should work on all negative integers", function () {
    expect(sum(-2, -2)).toBe(-4);
    expect(sum(-2, 0)).toBe(-2);
  });
});
describe("test sum function with strings", function () {
  test("should work on strings", function () {
    expect(sum("a", "b")).toBe(undefined);
  });
});
